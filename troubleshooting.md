# trouble shooting

## 1. 절대경로 설정

절대 경로 설정 간에 craco 사용 및 craco alias 사용하여 설정
자세한 내용은 tsconfing.paths.json, tsconfig.json 참고

## 2. svg 타입 설정

svg가 정상적으로 import되나 type이 설정되어 있지 않아서 발생
tsconfig.json에 typeroot 옵션을 설정하고 type folder를 만들어서

```javascript
declare module '*.svg';
```

svg에 대한 타입을 설정해주면 됨.
추가 공부할 것 : 써드파티 라이브러리 타입 정의 방법
