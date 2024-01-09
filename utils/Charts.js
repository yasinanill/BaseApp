import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const DonutChart = ({ percentage }) => {
    const radius = 50;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
  
    const progress = percentage * (circumference / 100);
    const remaining = circumference - progress;
  
    return (
      <View style={{ alignItems: 'center', marginTop: 16 }}>
        <Svg width={120} height={120}>
          {/* Tam dolu daire */}
          <Circle
            cx={60}
            cy={60}
            r={radius}
            fill="none"
            stroke="lightgray"
            strokeWidth={strokeWidth}
          />
  
          {/* Kullanıcının belirlediği yüzdelik doluluk */}
          <Circle
            cx={60}
            cy={60}
            r={radius}
            fill="none"
            stroke="blue"
            strokeWidth={strokeWidth}
            strokeDasharray={`${progress} ${remaining}`}
            strokeDashoffset={0}
          />
        </Svg>
        <Text style={{ marginTop: 8, fontSize: 18 }}>{`${percentage}%`}</Text>
      </View>
    );
  };
  
  export default DonutChart;