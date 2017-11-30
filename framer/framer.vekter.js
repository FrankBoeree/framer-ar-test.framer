(function(scope) {var mainScreen = new Layer({"height":375,"name":"mainScreen","constraintValues":{"height":375,"heightFactor":1,"width":667,"widthFactor":1},"backgroundColor":"rgba(36, 36, 36, 0.6)","clip":true,"width":667});var __layer_0__ = new TextLayer({"parent":mainScreen,"backgroundColor":null,"width":68,"x":439,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"36px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFUIText-Regular\", \".SFUIText\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgb(255, 255, 255)"}}],"text":"x1.0"}]},"height":43,"constraintValues":{"left":null,"height":43,"centerAnchorX":0.70914542728635677,"width":68,"right":160,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true,"y":166});var __layer_1__ = new TextLayer({"parent":mainScreen,"backgroundColor":null,"width":24,"x":160,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":1,"css":{"fontSize":"36px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFUIText-Regular\", \".SFUIText\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgb(255, 255, 255)"}}],"text":"0"}]},"height":43,"constraintValues":{"left":160,"height":43,"centerAnchorX":0.25787106446776614,"width":24,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true,"y":166});var verticalOrientation = new Layer({"name":"verticalOrientation","backgroundColor":"rgba(36, 36, 36, 0.5)","width":375,"x":490,"height":667,"constraintValues":{"left":490,"height":667,"centerAnchorX":0.5,"width":375,"top":170,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid","y":170});var rotateText = new TextLayer({"parent":verticalOrientation,"name":"rotateText","backgroundColor":null,"width":265,"x":56,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":25,"css":{"fontSize":"20px","WebkitTextFillColor":"rgb(255, 255, 255)","letterSpacing":"0px","lineHeight":"1.2","fontWeight":"bold","tabSize":4,"fontFamily":"\".SFNSText\", \"SFUIText-Regular\", \".SFUIText\", \"SF UI Text\", sans-serif"}}],"text":"Please rotate your device"}],"alignment":"center"},"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.5013333333333333,"width":265,"bottom":203,"top":null,"centerAnchorY":0.67766116941529231},"blending":"normal","autoSize":true,"y":440});var rotatePic = new SVGLayer({"parent":verticalOrientation,"name":"rotatePic","backgroundColor":null,"width":199,"x":88,"html":"<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-rotate-ccw\"><polyline points=\"1 4 1 10 7 10\"><\/polyline><path d=\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\"><\/path><\/svg>","htmlIntrinsicSize":{"height":24,"width":24},"color":"rgb(255, 255, 255)","height":199,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":199,"centerAnchorX":0.5,"width":199,"top":192,"centerAnchorY":0.43703148425787108},"blending":"normal","y":192});var hiroMarkerInstruction = new Layer({"name":"hiroMarkerInstruction","backgroundColor":"rgba(36, 36, 36, 0.4)","width":667,"x":999,"height":375,"constraintValues":{"left":999,"height":375,"centerAnchorX":1.1851574212893554,"width":667,"top":581,"centerAnchorY":1.468},"blending":"normal","clip":false,"borderStyle":"solid","y":581});var __layer_2__ = new TextLayer({"parent":hiroMarkerInstruction,"backgroundColor":null,"width":345,"x":161,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":34,"css":{"fontSize":"20px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFUIText-Regular\", \".SFUIText\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgb(255, 255, 255)"}}],"text":"Use Hiro marker to reach 3d-models"}]},"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.5,"width":345,"bottom":91,"top":null,"centerAnchorY":0.72533333333333339},"blending":"normal","autoSize":true,"y":260});var __layer_3__ = new Layer({"parent":hiroMarkerInstruction,"name":"HiroMarkerimg","borderWidth":20,"backgroundColor":null,"width":139,"x":263,"borderColor":"rgb(255, 255, 255)","height":139,"constraintValues":{"left":null,"height":139,"centerAnchorX":0.49850074962518742,"width":139,"top":91,"centerAnchorY":0.42799999999999999},"blending":"normal","clip":false,"borderStyle":"solid","y":91});var instrSwipe = new Layer({"name":"instrSwipe","backgroundColor":"rgba(36, 36, 36, 0.4)","width":667,"x":1735,"height":375,"constraintValues":{"left":1735,"height":375,"width":667,"top":170},"blending":"normal","clip":false,"borderStyle":"solid","y":170});var scaleText = new TextLayer({"parent":instrSwipe,"name":"scaleText","backgroundColor":null,"width":94,"x":453,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":5,"css":{"fontSize":"36px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFUIText-Regular\", \".SFUIText\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgb(255, 255, 255)"}}],"text":"Scale"}]},"height":43,"constraintValues":{"left":null,"height":43,"centerAnchorX":0.7496251874062968,"width":94,"right":120,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true,"y":166});var __layer_4__ = new TextLayer({"parent":instrSwipe,"backgroundColor":null,"width":58,"x":305,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":5,"css":{"fontSize":"20px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFUIText-Regular\", \".SFUIText\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgb(255, 255, 255)"}}],"text":"Swipe"}]},"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.50074962518740629,"width":58,"top":null,"centerAnchorY":0.5013333333333333},"blending":"normal","autoSize":true,"y":176});var __layer_5__ = new TextLayer({"parent":instrSwipe,"backgroundColor":null,"width":112,"x":120,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":6,"css":{"fontSize":"36px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFUIText-Regular\", \".SFUIText\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgb(255, 255, 255)"}}],"text":"Rotate"}]},"height":43,"constraintValues":{"left":120,"height":43,"centerAnchorX":0.26386806596701651,"width":112,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true,"y":166});scaleText.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|scaleText","targetName":"scaleText","vekterClass":"TextNode","text":"Scale"};hiroMarkerInstruction.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|hiroMarkerInstruction","targetName":"hiroMarkerInstruction","vekterClass":"RectangleNode"};__layer_2__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_2__","vekterClass":"TextNode","text":"Use Hiro marker to reach 3d-models"};__layer_0__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_0__","vekterClass":"TextNode","text":"x1.0"};rotatePic.__framerInstanceInfo = {"originalFilename":"rotate-ccw","framerClass":"SVGLayer","hash":"#vekter|rotatePic","targetName":"rotatePic","vekterClass":"SVGNode"};rotateText.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|rotateText","targetName":"rotateText","vekterClass":"TextNode","text":"Please rotate your device"};verticalOrientation.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|verticalOrientation","targetName":"verticalOrientation","vekterClass":"RectangleNode"};mainScreen.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|mainScreen","targetName":"mainScreen","vekterClass":"FrameNode"};__layer_1__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_1__","vekterClass":"TextNode","text":"0"};instrSwipe.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|instrSwipe","targetName":"instrSwipe","vekterClass":"RectangleNode"};__layer_4__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_4__","vekterClass":"TextNode","text":"Swipe"};__layer_3__.__framerInstanceInfo = {"hash":"#vekter|__layer_3__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_5__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_5__","vekterClass":"TextNode","text":"Rotate"};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {mainScreen, verticalOrientation, rotateText, rotatePic, hiroMarkerInstruction, instrSwipe, scaleText});scope["__vekterVariables"] = ["mainScreen", "verticalOrientation", "rotateText", "rotatePic", "hiroMarkerInstruction", "instrSwipe", "scaleText"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);