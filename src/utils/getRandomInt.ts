const getRandomInt = (min: number, max: number) : number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomInt;

//최댓값 최소값 포함한 정수 난수 생성