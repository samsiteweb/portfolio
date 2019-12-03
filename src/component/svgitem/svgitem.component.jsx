import React from 'react';
import {EmptyBox,
    JsLogo,
    CssLogo,
    HtmlLogo,
    Dart,
    FlutterLogo,
    FireLogo,
    IonicLogo,
    Nodejs,
    ReactLogo,
    AngularLogo} from './index'

const SvgItem = ({svg, size}) => {
    
    const Svgs = {
    EmptyBox: EmptyBox, 
    JsLogo: JsLogo,
    CssLogo: CssLogo,
    HtmlLogo: HtmlLogo,
    Dart: Dart,
    FlutterLogo: FlutterLogo,
    FireLogo: FireLogo,
    IonicLogo: IonicLogo,
    Nodejs: Nodejs,
    ReactLogo: ReactLogo,
    AngularLogo: AngularLogo
    }
    var NewComp = Svgs[svg]
    return (
        <NewComp style={(size ? {height: `${size}`, width: `${size}`} : {height: 100, width: 100}) } />

    )
}

export default SvgItem;