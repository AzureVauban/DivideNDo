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
        height: "100%",
        alignSelf: "stretch",
        margin: 0,
        borderRadius: 8,
    },
    text: { color: colors.dark.text, fontSize: 16 },
    completedText: {
        color: colors.dark.tertiary,
        textDecorationLine: "line-through",
    },
});
