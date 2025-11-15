// create test page
import { commonStyles } from "@/constants/styles";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function TestPage() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={commonStyles.centerContainer}>
      <TextInput
        style={[commonStyles.input, styles.phoneInput]}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        maxLength={15}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  phoneInput: {
    width: "90%",
  },
});
