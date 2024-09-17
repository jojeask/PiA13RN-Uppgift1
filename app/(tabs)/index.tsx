import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "#00bfff", flex: 1 }}>

      <View style={{
        backgroundColor: "red",
        height: 120,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Text style={{ fontSize: 24 }}>RÖD</Text>
      </View>

      <View style={{
        flexDirection: "row",
        height: 120
      }}>
        <View style={{
          backgroundColor: "green",
          flex: 1
        }}>
          <Text style={{
            fontSize: 24
          }}>GRÖN</Text>
        </View>
        <View style={{
          backgroundColor: "yellow",
          flex: 1
        }}>
        </View>
      </View>

      <View style={{
        flexDirection: "row",
        height: 60
      }}>
        <View style={{
          backgroundColor: "red",
          flex: 2
        }}>
        </View>
        <View style={{
          backgroundColor: "black",
          flex: 0.66
        }}>
        </View>
      </View>

      <View style={{ flex: 1 }}></View>

      <View style={{
        backgroundColor: "orange",
        flexDirection: "row",
        height: 40,
        alignItems: "center",
        justifyContent: "flex-end"
      }}>
        <Text style={{ fontSize: 24 }}>ORANGE</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
