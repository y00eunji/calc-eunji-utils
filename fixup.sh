#index.d.ts 파일을 dist 아래 경로로 옮기고 (중복 제거) 빌드된 파일들이 저장될 디렉토리에 package.json을 생성하는 스크립트이다.
# dist/mjs/index.d.ts 파일을 dist로 복사
cp dist/mjs/index.d.ts dist

# 중복 제거: dist 하위의 모든 index.d.ts 파일 삭제
rm -rf dist/*/index.d.ts

# cjs 및 mjs 디렉토리 생성 (존재하지 않을 경우)
mkdir -p dist/cjs dist/mjs

# dist/cjs/package.json 생성
cat > dist/cjs/package.json <<!EOF
{
    "type": "commonjs"
}
!EOF

# dist/mjs/package.json 생성
cat > dist/mjs/package.json <<!EOF
{
    "type": "module"
}
!EOF

