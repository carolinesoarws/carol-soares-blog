
# Deploy manual para GitHub Pages (branch gh-pages)

Este projeto faz deploy do site estático usando a branch `gh-pages` do GitHub Pages, copiando manualmente o conteúdo da build para a branch de deploy.

## Passos para Deploy

1. **Na branch principal (`main`), gere o build:**
```bash
git checkout main
npm run build
```

2. **Copie o build para uma pasta temporária fora do projeto:**

```bash
cp -R build ../build-temp
```

3. **Vá para a branch `gh-pages` (crie se ainda não existir):**

```bash
git checkout gh-pages
# ou, se a branch não existe ainda:
# git checkout --orphan gh-pages
```

4. **Remova todos os arquivos antigos da branch:**

```bash
git rm -rf .
```

5. **Copie o conteúdo do build (na pasta temporária) para a raiz do projeto:**

```bash
cp -R ../build-temp/* .
```

6. **Adicione e faça commit (forçando inclusão dos arquivos ignorados):**

```bash
git add -f .
git commit -m "Manual deploy to gh-pages"
git push -f origin gh-pages
```

7. **(Opcional) Limpe a pasta temporária:**

```bash
rm -rf ../build-temp
```

8. **Pronto! O site estará publicado em:**

```
https://<seu-usuario>.github.io/<nome-do-repositorio>/
```

---

**Observação:**
Esse processo funciona para qualquer projeto estático (React, Docusaurus, Vue, etc).
Adapte os comandos conforme seu sistema operacional (ex: `cp` no Mac/Linux, `xcopy` no Windows).

---

