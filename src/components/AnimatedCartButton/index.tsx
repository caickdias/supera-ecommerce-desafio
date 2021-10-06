import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { StyleProp, View, ViewStyle, Animated } from 'react-native';
import CartContext from '../../context/contexts';

import { styles } from './styles';

type Props = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

export const AnimatedCartButton = ({ children, style }: Props) => {

    const animatedValue = useRef(new Animated.Value(0)).current;
    const [animation, setAnimation] = useState(1);

    const { cart } = useContext(CartContext);

    useEffect(() => {
        scaleAnimation.start();
        setAnimation(animation ? 0 : 1);
    },[cart]);

    const scaleAnimation = Animated.timing(animatedValue, {
        toValue: animation,
        duration: 300,
        useNativeDriver: false,
    })
    
    const animatedStyles = {
        transform: [
            {
                scale: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 1.5, 1]
                })
            }
        ]
    }

    return (
        <Animated.View style={[style, { transform: animatedStyles.transform }]}>
            {children}
        </Animated.View>
    );
}