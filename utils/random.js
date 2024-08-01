//　人事に怪しまれないように毎日ランダムでお天気を選ぶ
export const selectRandom = () => {
    return Math.floor(Math.random() * 6) + 1;
}