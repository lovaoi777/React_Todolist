# UI 구성하기

## 1. TodoTemplate 
 : 화면을 가운데에 정렬 시켜주며, 앱 타이틀(일정 관리)을 보여줍니다.
 children으로 내부 JSX를 props로 받아 와서 렌더링 해줍니다.
 
## 2. TodoInsert
 : 새로운 항목을 입력하고 추가할 수 있는 컴포넌트입니다. state를 통해 인풋의 상태를 관리합니다.
 
## 3. TodoListItem
 : 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트입니다. todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여줍니다.
 
## 4. TodoList
 : todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여줍니다.




## ESLint , Prettier

## ESLint 
ESLint는 문법 검사 도구이고 코드를 작성할 때 실수를 하면 에러 혹은 경고 메시지를 VS code 에디터에서 바로 확인 할 수있게 해해줍니다


## Prettier

Prettier는 코드 스타일 자동 정리 도구입니다.
Prettier를 사용하여 자동  코드 정리를 하면 코드가 제대로 정렬되고, 
예로 들어세미콜론이 빠진 곳에 세미콜린이 자동으로 추가됩니다.

Prettier의 장점은 이러한 스타일을 쉽게 커스터마이징할 수있다.

{
    "singleQuote": true, single  //쿼테이션 사용여부 
    "semi":true,     //세미콜론 사용 여부 
    "useTabs":false, //탭 사용 여부
    "trailingComma": "all", // 여러 줄을 사용할 때, 후행 콤마 방식
    "printWidth": 80  //줄 바꿈 할 폭 길이
}

