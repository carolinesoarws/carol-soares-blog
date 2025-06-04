
````markdown
# Deploy no GitHub Pages via pasta `/docs`

Este projeto publica o site estático diretamente pelo GitHub Pages, usando a pasta `docs` na branch principal.

## Passos para Deploy

1. **Gere a build do seu projeto:**
   ```bash
   npm run build
````

2. **Copie o conteúdo da build para a pasta `docs`:**

   ```bash
   cp -r build docs
   ```

   > No Windows, use: `xcopy build docs /E /H /C /I`

3. **Adicione, commit e faça push:**

   ```bash
   git add docs
   git commit -m "Atualiza site na pasta docs"
   git push origin main
   ```

4. **Configure o GitHub Pages:**

   * Vá em **Settings** > **Pages** no repositório.
   * Selecione a branch `main` e a pasta `/docs`.
   * Salve.

5. **Acesse seu site:**

   ```
   https://<seu-usuario>.github.io/<nome-do-repositorio>/
   ```

---
