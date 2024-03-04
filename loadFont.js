import React from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';

const CustomFontLoader = () => {
  const [loaded] = useFonts({
    ComicSansMS3: require('./font/ComicSansMS3.ttf'),
    marianne_bold: require('./font/marianne_bold.otf'),
  });

  if (!loaded) {
    return <Text>Loading...</Text>;
  }

//   return (
//     <View>
//     {/* //   <Text style={{ fontFamily: 'ComicSansMS3' }}>Text with custom font</Text> */}
//     </View>
//   );
};

export default CustomFontLoader;