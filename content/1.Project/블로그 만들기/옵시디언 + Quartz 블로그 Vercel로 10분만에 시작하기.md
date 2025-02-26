---
tags:
  - PROJECT
  - 개발
  - 블로그
title: 옵시디언 + Quartz 블로그 Vercel로 10분만에 시작하기
---
나는 못 배운 개발자라 이상한 기준이 있다.

개발자 블로그를 네이버나 티스토리에 만들면 뭔가 모르게 짜친다.

Velog나 Medium 같은 선택지도 있지만, 직접 만드는 게 더 멋있어 보인다.

  

예전에 Jekyll을 사용해 GitHub Pages로 블로그를 올린 적이 있다.

노션에서 글을 작성한 후, 내용을 복사해 VSC에서 Markdown 파일에 붙여넣어 작성했는데, 이게 여간 불편한 게 아니었다.

이미지라도 넣으려면 경로를 맞춰줘야 했고, 안 그래도 글쓰기 싫은데 불편하니까 더 손이 안 갔다.

  

그러다 **Obsidian**을 발견했고, 활용해보니 내 불편함을 해소하기에 충분했다.

찾아보니 **Quartz**라는 정적 블로그 프레임워크와 궁합이 좋다고 해서 이를 활용해 블로그를 만들기로 했다.

  

이 문서는 **Obsidian과 Quartz를 사용해 정적 블로그를 생성하고, 이를 Vercel에 배포하는 방법**을 기록한 것이다.

  

위에서 언급했듯이 나는 못 배운 개발자라, 그냥 이렇게 만들었다고 기록하는 것이지 정답은 아니다.

그러니 꼭 크로스 체크하길 바란다.


### -시작-

---



# 1.  준비물

> [!note]필수 도구들
>+ **Obsidian**: 마크다운 기반 노트 앱 (※ [Obsidian 공식사이트](https://obsidian.md) 에서 다운로드)
>+ **Node.js (버전 20 이상 권장)**
>+ **npm v9.3.1** 이상
>+ **Github 리파지토리**: 버전 관리 및 Vercel 연동을 위해 필요
>+ **Vercel 계정**: [Vercel 공식사이트](https://vercel.com) 에서 회원가입 


---

# 2. Quartz 설치
 
 터미널을 키고 원하는 위치에서 아래 명령어를 실행한다.

```bash
git clone https://github.com/jackyzha0/quartz.git
cd quartz
npm i
npx quartz create
```

사용하는 에디터를 활용해 디렉토리를 오픈한다.

![[Pasted image 20250214155750.png]]


quartz.config.ts파일을 열어 적당히 내용을 수정한다.

![[Pasted image 20250214160216.png]]

그 후 프로젝트 루트에서 아래 명령어를 실행하면 localhost:8080으로 페이지 접속이 가능하다.

```bash
npx quartz build --serve
```

더 자세한 블로그 셋팅법은 다음에 써야지

---

# 3. 옵시디언 설치 및 설정

**Obsidian**(※ [Obsidian 공식사이트](https://obsidian.md))을 다운 받아 설치 하자.

이런건 알아서 하시고 설치된 옵시디언을 실행하면

![[Pasted image 20250214160806.png]]

벌쳐라고 하는 보관함을 생성할 수 있다. 하지만 우리는 Quartz를 통해 블로그를 생성했으니

두 번째 보관함 폴더 열기를 클릭한다.

거기서 블로그 프로젝트 디렉토리에 있는 content 폴더를 선택한다.

![[Pasted image 20250214161035.png]]



옵시디언이 정상 실행되면 좌측엔 폴더트리, 우측엔 에디트 화면이 나올것이다.

![[Pasted image 20250214161144.png]]

이제 알아서 문서를 생성하고 편집하면 된다.

---

# 4. Github 리파지토리 생성 및 code push

Github 계정에서 아래 이미지를 참고해서 새 리파지토리를 만들자
다른건 상관 없는데 ==Public로 안하니 Vercel에 배포하는데 권한 에러 나더라==
추가 설정 하면 되겠지만 일단 Public으로 만들어라.

![[Pasted image 20250214161415.png]]

잘 생성했으면 생성된 리파지토리에 블로그 프로젝트를 올려야 한다.

아래 리파지토리 주소 복사해두고 터미널에서 아래 명령어 실행해라
![[Pasted image 20250214161925.png]]


```bash
cd 블로그 프로젝트 root
git init
git remote add origin 리파지토리 주소

git add .  
git commit -m 'init commit'  
git push origin main
```


이렇게 하고 잘 올라갔는지 확인하면 끝

---

# 5. Vercel에 배포

[Vercel](https://vercel.com/) 에 접속하고 로그인 해라. 
계정이 없으면 만들어라 github 계정으로 가입 가능하다.

가입 후 대시보드를 보면 우측에 Add New...이라는 검정색 버튼이 있다.

누르면 메뉴가 나오는데 Project 선택하면 된다.

![[Pasted image 20250214162438.png]]


그러면 아래 화면이 나온다. 

배포할 리파지토리 이름 옆 import를 누른다.

![[Pasted image 20250214162639.png]]


프로젝트 생성 화면이 나오면 적당히 프로젝트 이름(영어로) 적고 

**Framework Preset** 은 **Other**로 지정한다.

그 밑에

Build and Output Setting > Build Command를 수정해야 한다.

아래 명령어를 입력하자.

```bash
npx quartz build
```

![[Pasted image 20250214162817.png]]


프로젝트가 정상적으로 생성되면 Vercel이 자동으로 배포를 시작한다.

정적 사이트는 몇 초 걸리지도 않는다.

완료되면 대시보드에 아래와 같이 사이트 메인 화면이 보일 것 이다.

![[Pasted image 20250214163137.png]]


화면을 클릭하면 배포된 페이지가 열린다.


---


처음 하는 사람도 30분이면 내 블로그가 생긴다.

간단하니 한 번 쯤 써봐도 좋을 듯 하다.

### -끝- 
