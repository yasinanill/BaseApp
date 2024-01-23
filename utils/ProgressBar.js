import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeightLossProgressBar = ({ initialWeight, currentWeight, targetWeight }) => {
  const progress = ((initialWeight - currentWeight) / (initialWeight - targetWeight)) * 100;

  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 20,
    width: '95%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#89168D', // Kırmızı renk kullanılabilir
  },
});

export default WeightLossProgressBar;