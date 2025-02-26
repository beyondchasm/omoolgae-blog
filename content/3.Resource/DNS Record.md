---
title: DNS Record
tags:
  - 참고자료
---
# DNS 레코드(DNS Record)

## DNS 레코드란?  
- **DNS 서버에 저장된 도메인 정보**  
- 도메인과 관련된 **IP 주소, 메일 서버 정보, 기타 설정**을 정의  
- 웹사이트 접속, 이메일 송수신, 서비스 연결 등에 사용  

## 주요 DNS 레코드 종류  

### 1. A 레코드 (Address Record)  
- **도메인을 IPv4 주소로 매핑**  
- 예) `google.com` → `142.250.191.206`  

### 2. AAAA 레코드 (IPv6 Address Record)  
- **도메인을 IPv6 주소로 매핑**  
- 예) `google.com` → `2607:f8b0:4005:808::200e`  

### 3. CNAME 레코드 (Canonical Name)  
- **도메인을 다른 도메인으로 연결**  
- 예) `www.example.com` → `example.com`  

### 4. MX 레코드 (Mail Exchange)  
- **메일 서버 주소 지정**  
- 예) `example.com` → `mail.example.com`  

### 5. TXT 레코드 (Text Record)  
- **도메인 소유권 인증, 보안, 이메일 스팸 방지 등에 사용**  
- 예) SPF, DKIM, DMARC 설정  

### 6. NS 레코드 (Name Server)  
- **도메인의 네임 서버 지정**  
- 예) `example.com` → `ns1.dnsprovider.com`  

### 7. PTR 레코드 (Pointer Record)  
- **IP 주소 → 도메인으로 변환 (역방향 조회)**  
- 예) `142.250.191.206` → `google.com`  

### 8. SRV 레코드 (Service Record)  
- **특정 서비스의 위치 정보 제공**  
- 예) VoIP, XMPP 같은 서비스에서 사용  

## DNS 레코드의 역할  
- ✅ **웹사이트 연결** → A, AAAA, CNAME  
- ✅ **이메일 송수신** → MX, TXT  
- ✅ **보안 강화** → TXT (SPF, DKIM, DMARC)  
- ✅ **역방향 조회** → PTR  

## 정리  
- 📌 **DNS 레코드 = 도메인과 관련된 정보 저장소**  
- 📌 **웹사이트, 이메일, 서비스 연결을 담당**  
- 📌 **A, MX, CNAME 등 다양한 레코드 존재**  