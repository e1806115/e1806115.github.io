function pear(language) {
    var message = "";

    if (language == 1) {
        message = "［幸水］ 果肉は柔らかく、多汁で甘みが強い";
    } else if (language == 2) {
        message = "[豊水] 果肉は果汁が多く、非常に糖度が高い。その分酸味もあり、全体的に濃厚な味わい";
    } else if (language == 3) {
        message = "[新高] 全体的に大きく小さくてもソフトボール程の大きさ。酸味が少ないためとても甘く感じる";
    } else {
        message = "想定されていない引数です。";
    }
    alert(message);

}


function greap(language) {
    var message = "";

    if (language == 1) {
        message = "［巨峰］ 1粒1粒に栄養がいきわたっていて糖度も高い";
    } else if (language == 2) {
        message = "[ピオーネ] 巨峰より大きく風味がよい。強い甘さがあるがそれを支える酸味もある";
    } else {
    message = "想定されていない引数です。";
}
alert(message);

}

