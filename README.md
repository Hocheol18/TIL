# TIL

## Today I Learned

### Git 명령어

1. 원격 저장소 오류나면 :: 다시 remote 통해서 url 등록
2. url 등록 :: git remote add origin url.git
3. url 확인 :: git remote -v
4. 푸시, 업로드 :: git push -u origin master
5. (만약 푸시 애러 나면) :: git push origin +master
6. 삭제 :: rm -r 파일명
7. 전부 삭제 :: rm -r *
8. 이름 수정(Storage Area) :: git mv Old_file New_file
9. 한 번에 생성 가능 :: echo > a.txt > b.txt > c.txt
10. 이것만 빼고 나머지 commit or add . 가능 :: echo c.txt >> .gitignore
11. 깃 시작 :: git init
12. 전부 storage area :: git add .
13. 커밋 :: git commit -m '이름'
14. 로그 :: git log 
15. 깃 종료 :: rm -rf .git
16. add 취소 :: git reset
17. 이름 생성 :: git config --global user.name ~
18. 이메일 생성 :: git config --global user.email ~
19. 보기 :: git config --global -l
20. remote 끊기 :: git remote remove '이름'
