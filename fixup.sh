#index.d.ts 파일을 dist 아래 경로로 옮기고 (중복 제거) 빌드된 파일들이 저장될 디렉토리에 package.json을 생성하는 스크립트이다.
cp dist/mjs/index.d.ts dist

rm -rf dist/index.d.ts

cat >dist/cjs/package.json <<!EOF
{
    "type": "commonjs"
}
!EOF

cat >dist/mjs/package.json <<!EOF
{
    "type": "module"
}
!EOF
