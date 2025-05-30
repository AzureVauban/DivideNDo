import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.primary,
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: colors.dark.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.dark.text,
    marginBottom: 32,
    textAlign: "center",
  },
  taskItem: {
    backgroundColor: colors.dark.secondary,
    padding: 15,
    marginBottom: 5,
    borderRadius: 8,
  },
  taskText: {
    color: colors.dark.text,
    fontSize: 16,
  },
  indentedTask: {
    marginLeft: 20,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: colors.dark.tertiary,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginTop: 18,
    color: colors.dark.text,
    backgroundColor: colors.dark.secondary,
    fontSize: 16,
  },
  listTitleWrapper: {
    alignItems: "center",
    marginVertical: 10,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: "bold",
    alignItems: "center",
    color: colors.light.accent,
    marginTop: 25,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  divider: {
    height: 1,
    backgroundColor: colors.dark.tertiary,
    marginVertical: 10,
    width: 300,
    alignSelf: "center",
  },
  addTaskButton: {
    backgroundColor: colors.light.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  addTaskButtonText: {
    color: colors.light.text,
    fontSize: 16,
    fontWeight: "500",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: colors.dark.secondary,
    padding: 20,
    borderRadius: 12,
    width: "80%",
  },
  modalTitle: {
    color: colors.dark.text,
    fontSize: 18,
    marginBottom: 12,
    fontWeight: "bold",
  },
  modalInput: {
    borderWidth: 1,
    borderColor: colors.dark.tertiary,
    color: colors.dark.text,
    padding: 8,
    borderRadius: 6,
    marginBottom: 12,
  },
  colorPickerContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  colorSwatch: {
    width: 40,
    height: 40,
    borderRadius: 8,
    margin: 4,
  },
  modalButton: {
    backgroundColor: colors.light.primary,
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
    alignItems: "center",
  },
  modalButtonText: {
    color: colors.light.text,
    fontSize: 16,
  },
  inlineButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    margin: 0,
    borderRadius: 8,
    // Height should be set where the button is used to match the row height
  },
  text: {
    color: colors.dark.text,
    fontSize: 16,
  },
  completedText: {
    color: colors.dark.tertiary,
    textDecorationLine: "line-through",
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 24,
  },
  codeBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#1A1A1A",
    justifyContent: "center",
    alignItems: "center",
  },
  codeText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  verifyButton: {
    backgroundColor: "#F26C4F",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  keypad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  key: {
    width: "30%",
    marginVertical: 10,
    aspectRatio: 1,
    backgroundColor: "#1A1A1A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  keyText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  taskGroupRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 2,
    width: "100%",
  },
  taskGroupButtonText: {
    color: colors.light.primary,
    fontWeight: "bold",
    fontSize: 15,
  },
  taskListButton: {
    backgroundColor: colors.light.primary,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 300,
    alignSelf: "center",
    shadowColor: colors.dark.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskListButtonText: {
    color: colors.light.accent,
    fontWeight: "500",
    fontSize: 16,
  },
  recentlyDeletedButton: {
    backgroundColor: colors.dark.secondary,
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 2,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButton: {
    backgroundColor: colors.dark.accent,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: "100%",
  },
  renameButton: {
    backgroundColor: colors.light.secondary,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: "100%",
  },
  recentlyDeletedText: {
    color: colors.light.text,
    fontWeight: "500",
    fontSize: 15,
  },
  scrollRegion: {
    backgroundColor: colors.light.secondary,
    borderRadius: 16,
    padding: 10,
    marginHorizontal: 12,
    marginTop: 18,
    marginBottom: 10,
    maxHeight: 350,
    minHeight: 200,
  },
  taskGroupButton: {
    backgroundColor: colors.dark.secondary,
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 2,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
  },
  taskGroupsWrapper: {
    marginTop: 60,
    marginHorizontal: 10,
    marginBottom: 20,
    alignItems: "flex-start",
    marginLeft: 12,
    width: "100%",
  },
  addTaskListButton: {
    backgroundColor: colors.light.secondary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "78.0%",
  },
  addTaskListButtonText: {
    color: colors.light.text,
    fontSize: 16,
    fontWeight: "500",
  },
  leftAction: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
    borderRadius: 12,
  },
  screenbackground: {
    flex: 1,
    backgroundColor: colors.dark.primary,
    color: colors.dark.primary,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  content: {
    width: "80%",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.dark.secondary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: colors.dark.text,
    fontWeight: "bold",
  },
  buttonSecondary: {
    backgroundColor: colors.dark.secondary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
    //color: colors.dark.secondary,
    //fill: colors.dark.secondary,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.dark.tertiary,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 60,
    width: "100%",
    justifyContent: "space-between",
    borderColor: colors.dark.accent,
  },
  taskTextDone: {
    textDecorationLine: "line-through",
    color: colors.dark.text,
    opacity: 0.6,
  },
  taskDue: {
    color: colors.dark.accent,
    fontSize: 14,
  },
  modalOption: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: colors.dark.tertiary,
  },
  showListsButtons: {
    width: 56,
    height: 56,
    borderRadius: 15,
    backgroundColor: colors.dark.primary,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    bottom: 24,
    left: 24,
    borderColor: colors.dark.accent,
    borderWidth: 1.5,
    color: colors.dark.accent,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  optionText: {
    color: colors.dark.text,
    fontSize: 16,
  },
  logoutButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: 300,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: 20,
  },
  logoutButtonText: {
    fontWeight: "bold",
  },
  greetscreen_screenbackground: {
    flex: 1,
    backgroundColor: colors.dark.primary,
    color: colors.dark.text,
    justifyContent: "center",
    alignItems: "center",
  },
  greetscreen_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#104C64",
  },
  greetscreen_content: {
    width: "80%",
    alignItems: "center",
  },
  link: {
    fontSize: 16,
    color: colors.dark.text,
    marginBottom: 20,
    fontWeight: "bold",
  },

  greetscreen_buttonText: {
    color: colors.dark.secondary,
    fontWeight: "bold",
  },
  screen: {
    flex: 1,
  },
  input: {
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 18,
    color: "#000",
    backgroundColor: "#fff",
  },

  forgot: {
    marginTop: 18,
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 14,
    fontWeight: "500",
  },

  headerBlock: { gap: 16 },

  form: {
    gap: 16,
  },

  inputBackgroundError: {
    backgroundColor: "#450a0a",
  },
  calendarBackground: {
    backgroundColor: colors.dark.calendarBackground, // default to dark, switch in component
    borderRadius: 12,
    minWidth: 320,
    marginBottom: 16,
  },
});

export const getNavibarIconActiveColor = (isDark: boolean) =>
  isDark ? "#facc15" : "#ca8a04";

// Add these to your theme/colors.ts if not already present:
// colors.light.calendarBackground = "rgb(212, 212, 216)";
// colors.dark.calendarBackground = "rgb(39, 39, 42)";
