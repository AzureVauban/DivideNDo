import React, { useEffect, useRef, useState } from "react";

import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";

import { colors } from "@theme/colors";
import { generateUsername } from "utils/generateUsername";
import { playFlaggedSound } from "utils/sounds/flag";
import { playInvalidSound } from "utils/sounds/invalid";
import { styles } from "@theme/styles";
import { useTheme } from "lib/ThemeContext";

import MemberListIcon from "../../assets/icons/svg/fi-br-member-list.svg";
import { getAuthErrorMessage } from "../../lib/auth-exceptions";
import { supabase } from "../../lib/supabaseClient";

export default function LoginScreen() {
  console.log("001 :LoginScreen rendered");

  const [initialUsername, setInitialUsername] = useState(generateUsername());
  const [username, setUsername] = useState(initialUsername);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const { theme, isDark } = useTheme();
  const isGeneratedUsername = username.trim() === initialUsername;

  // Animated values for background colors
  const usernameBgAnim = useRef(new Animated.Value(0)).current;
  const emailBgAnim = useRef(new Animated.Value(0)).current;
  const passwordBgAnim = useRef(new Animated.Value(0)).current;
  const confirmPasswordBgAnim = useRef(new Animated.Value(0)).current;

  // Helper to animate error background
  const triggerErrorAnimation = (animRef) => {
    Animated.sequence([
      Animated.timing(animRef, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }),
      Animated.timing(animRef, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
      }),
    ]).start();
  };

  // Watch for error state changes and trigger animation
  useEffect(() => {
    if (usernameError && !isGeneratedUsername) {
      playInvalidSound();
      triggerErrorAnimation(usernameBgAnim);
    }
  }, [usernameError, isGeneratedUsername]);

  useEffect(() => {
    if (emailError) {
      playInvalidSound();
      triggerErrorAnimation(emailBgAnim);
    }
  }, [emailError]);

  useEffect(() => {
    if (passwordError) {
      playInvalidSound();
      triggerErrorAnimation(passwordBgAnim);
    }
  }, [passwordError]);

  useEffect(() => {
    if (confirmPasswordError) {
      playInvalidSound();
      triggerErrorAnimation(confirmPasswordBgAnim);
    }
  }, [confirmPasswordError]);

  // Interpolate background color
  const getBgColor = (animRef, error, isUsernameField = false) =>
    animRef.interpolate({
      inputRange: [0, 1],
      outputRange: [
        isUsernameField && usernameError && !isGeneratedUsername
          ? styles.inputBackgroundError.backgroundColor
          : colors[theme].background,
        styles.inputBackgroundError.backgroundColor,
      ],
    });

  return (
    <View
      style={[
        register_styles.container,
        { backgroundColor: colors[theme].background },
      ]}
    >
      <MemberListIcon width={32} height={32} style={register_styles.icon} />
      <Text style={[register_styles.title, { color: colors[theme].text }]}>
        Register
      </Text>
      <Text
        style={[register_styles.description, { color: colors[theme].text }]}
      >
        Sign up to the totally generic todo app!
      </Text>

      {errorMessage ? (
        <Text
          style={{ color: "#dc2626", textAlign: "center", marginBottom: 8 }}
        >
          {errorMessage}
        </Text>
      ) : null}

      {/* Username Field with Animated Background */}
      <Animated.View
        style={{
          borderRadius: 6,
          marginBottom: 12,
          backgroundColor: getBgColor(usernameBgAnim, usernameError, true),
        }}
      >
        <TextInput
          style={[
            register_styles.input,
            {
              borderColor: colors[theme].tertiary,
              color: isGeneratedUsername
                ? isDark
                  ? "#22c55e"
                  : "#065f46"
                : colors[theme].text,
              fontWeight: isGeneratedUsername ? "bold" : "normal",
              backgroundColor: "transparent", // Let Animated.View handle bg
            },
          ]}
          placeholder="Username"
          placeholderTextColor={colors[theme].secondary}
          value={username}
          onChangeText={setUsername}
        />
      </Animated.View>

      {/* Email Field with Animated Background */}
      <Animated.View
        style={{
          borderRadius: 6,
          marginBottom: 12,
          backgroundColor: getBgColor(emailBgAnim, emailError),
        }}
      >
        <TextInput
          style={[
            register_styles.input,
            {
              borderColor: colors[theme].tertiary,
              color: colors[theme].text,
              backgroundColor: "transparent",
            },
          ]}
          placeholder="Email"
          placeholderTextColor={colors[theme].secondary}
          value={email}
          onChangeText={setEmail}
        />
      </Animated.View>

      {/* Password Field with Animated Background */}
      <Animated.View
        style={{
          borderRadius: 6,
          marginBottom: 12,
          backgroundColor: getBgColor(passwordBgAnim, passwordError),
        }}
      >
        <TextInput
          style={[
            register_styles.input,
            {
              borderColor: colors[theme].tertiary,
              color: colors[theme].text,
              backgroundColor: "transparent",
            },
          ]}
          placeholder="Password"
          placeholderTextColor={colors[theme].secondary}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </Animated.View>

      {/* Confirm Password Field with Animated Background */}
      <Animated.View
        style={{
          borderRadius: 6,
          marginBottom: 12,
          backgroundColor: getBgColor(
            confirmPasswordBgAnim,
            confirmPasswordError
          ),
        }}
      >
        <TextInput
          style={[
            register_styles.input,
            {
              borderColor: colors[theme].tertiary,
              color: colors[theme].text,
              backgroundColor: "transparent",
            },
          ]}
          placeholder="Confirm Password"
          placeholderTextColor={colors[theme].secondary}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </Animated.View>

      <TouchableOpacity
        style={[
          register_styles.button,
          { backgroundColor: colors[theme].primary },
        ]}
        onPress={async () => {
          console.log("002 :[Register] Continue button pressed");
          const isUsernameValid = username.length >= 3;
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const isEmailValid = emailRegex.test(email);
          const isPasswordValid = !!password;
          const isConfirmPasswordValid = password === confirmPassword;

          setUsernameError(!isUsernameValid);
          console.log(
            `003 :[Register] Username validation: ${
              isUsernameValid ? "valid" : "invalid"
            }`
          );
          setEmailError(!isEmailValid);
          console.log(
            `004 :[Register] Email validation: ${
              isEmailValid ? "valid" : "invalid"
            }`
          );
          setPasswordError(!isPasswordValid);
          console.log(
            `005 :[Register] Password validation: ${
              isPasswordValid ? "valid" : "invalid"
            }`
          );
          setConfirmPasswordError(!isConfirmPasswordValid);
          console.log(
            `006 :[Register] Confirm Password validation: ${
              isConfirmPasswordValid ? "valid" : "invalid"
            }`
          );
          setErrorMessage(null);
          console.log("007 :[Register] Validation complete");
          // Always trigger animation and sound if invalid, even if already in error state
          if (!isUsernameValid && !isGeneratedUsername) {
            playInvalidSound();
            console.warn(
              "008 :[Register] Username is invalid or not generated, triggering error animation"
            );
            triggerErrorAnimation(usernameBgAnim);
            console.warn("009 :[Register] Username error animation triggered");
          }
          if (!isEmailValid) {
            playInvalidSound();
            console.warn(
              "010 :[Register] Email is invalid, triggering error animation"
            );
            triggerErrorAnimation(emailBgAnim);
            console.warn("011 :[Register] Email error animation triggered");
          }
          if (!isPasswordValid) {
            playInvalidSound();
            console.warn(
              "012 :[Register] Password is invalid, triggering error animation"
            );
            triggerErrorAnimation(passwordBgAnim);
            console.warn("013 :[Register] Password error animation triggered");
          }
          if (!isConfirmPasswordValid) {
            playInvalidSound();
            console.warn(
              "014 :[Register] Confirm Password does not match, triggering error animation"
            );
            triggerErrorAnimation(confirmPasswordBgAnim);
            console.warn(
              "015 :[Register] Confirm Password error animation triggered"
            );
          }

          if (
            !isUsernameValid ||
            !isEmailValid ||
            !isPasswordValid ||
            !isConfirmPasswordValid
          ) {
            console.warn("Please correct the highlighted fields.");
            return;
          }

          try {
            // Pass values to auth-choice screen

            //* FEATURE/DATABASE_IMPLEMENTATION CRASH HAS BEEN TRACKED TO THIS LINE
            console.log("016 :[Register] Navigating to auth-choice screen");
            router.push({
              pathname: "/authentication/auth-choice",
              params: {
                username,
                email,
                password,
              },
            });

            // After successful registration and email is known:
            console.log("017 :[Register] Upserting profile in database");
            await supabase.from("profiles").upsert({
              email,
              username,
              display_name: username,
            });
          } catch (err: any) {
            console.error("Error during registration:", err);
            setErrorMessage(getAuthErrorMessage(err));
          }
        }}
      >
        <Text
          style={[
            register_styles.buttonText,
            { color: colors[theme].background },
          ]}
        >
          Continue
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          register_styles.button,
          { backgroundColor: colors[theme].primary },
        ]}
        onPress={() => {
          console.log("016 :[Register] Generate new username button pressed");
          playFlaggedSound();
          const newUsername = generateUsername();
          setUsername(newUsername);
          setInitialUsername(newUsername);
        }}
      >
        <Text
          style={[
            register_styles.buttonText,
            { color: colors[theme].background },
          ]}
        >
          Generate new username
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("017 :[Register] Forgot password link pressed");
          router.push("/notfound");
        }}
      >
        <Text style={[register_styles.forgot, { color: colors[theme].accent }]}>
          Forgot your password? Reset it here
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const register_styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  icon: {
    marginBottom: 16,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 12,
    color: "#000",
    letterSpacing: 0,
  },
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  forgot: {
    marginTop: 16,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  inputBackgroundError: {
    backgroundColor: "#7f1d1d",
  },
});
