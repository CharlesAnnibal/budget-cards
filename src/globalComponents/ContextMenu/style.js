import { StyleSheet } from 'react-native';


export const stylizeContextMenu = (position) => {
    console.log("CURRENT Y:", position)
    return StyleSheet.create({
        menu: {
            backgroundColor: '#e8ebfa',
            width: "50%",
            position: "absolute",
            left: position.x,
            top: position.y,
            zIndex:1
        }
    })
}
