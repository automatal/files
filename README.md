# ARQUIVOS.EXE 🗂️

Um site pequeno que simula um **explorador de arquivos** retrô (vermelho + roxo).
Ele serve de "pasta pública" para as **páginas avulsas** (tutoriais, tools, games e páginas de educação)
que podem ser acessadas direto por aqui ou linkadas de outros sites.

Cada página é independente: tem a própria pasta, o próprio `index.html` e o próprio visual.
O explorador só lista as páginas e abre cada uma **em uma nova aba** quando você clica.

```
.
├── index.html                  ← o explorador
├── files.json                  ← lista de páginas (gerada sozinha)
├── assets/style.css, app.js
├── scripts/build-files.mjs     ← gera o files.json
├── .github/workflows/site.yml  ← gera o files.json e publica no Pages
├── projects/  _modelo/  exemplo/
├── tools/     _modelo/
├── games/     _modelo/
└── educacao/  _modelo/
```

## 1. Ligar o GitHub Pages (só uma vez)

1. Crie um repositório público na outra conta e suba todos estes arquivos na branch `main`.
2. Vá em **Settings → Pages**.
3. Em **Build and deployment → Source**, escolha **GitHub Actions**.
4. Abra a aba **Actions**: se o workflow ainda não rodou, clique em **Site (files.json + Pages) → Run workflow**.
5. Quando ficar verde, o site estará em `https://<conta>.github.io/<repositorio>/`.

## 2. Adicionar uma página

1. Escolha a categoria: `projects`, `tools`, `games` ou `educacao`.
2. Crie uma pasta nova dentro dela, por exemplo `tools/meu-conversor/`.
   Use letras minúsculas, números e hífen (sem espaço e sem acento).
   Dica: copie a pasta `_modelo` da categoria e renomeie.
3. Coloque o `index.html` da página dentro dessa pasta (imagens e arquivos junto, com caminhos relativos).
4. (Opcional) Crie um `project.json` na mesma pasta:

   ```json
   {
     "title": "Meu Conversor",
     "description": "Converte imagens para WebP direto no navegador.",
     "date": "2026-10-31"
   }
   ```

   Sem ele, o explorador usa o `<title>` e a `<meta name="description">` do `index.html`,
   e a data do primeiro commit da pasta.
5. Faça o commit na `main`. O Actions atualiza o `files.json` e publica. Em 1 ou 2 minutos a página aparece.

Pelo site do GitHub: entre na pasta da categoria → **Add file → Upload files** → arraste a pasta inteira → **Commit changes**.

Pastas que começam com `_` ou `.` são ignoradas (por isso o `_modelo` não aparece).

## 3. Excluir uma página

Apague a pasta da página (ex.: `tools/meu-conversor/`) e faça o commit. O Actions tira ela do `files.json` sozinho.
Pelo site do GitHub: abra cada arquivo da pasta → **… → Delete file** (quando a pasta fica vazia, ela some).

A pasta `projects/exemplo/` existe só para o explorador não começar vazio. Pode apagar quando quiser.

## 4. Endereço de cada página

Endereço da página publicada:

```
https://<conta>.github.io/<repositorio>/<categoria>/<nome>/
```

> Se o repositório se chamar `<conta>.github.io`, o endereço fica `https://<conta>.github.io/<categoria>/<nome>/`.

Use esse endereço para compartilhar a página ou linkar ela de qualquer outro site.

## 5. Editar o `files.json` à mão (opcional)

O site só lê o `files.json`, então ele também funciona sem o Actions. Formato:

```json
{
  "categories": {
    "projects": [
      { "name": "exemplo", "title": "Página de exemplo", "path": "projects/exemplo/",
        "description": "Texto curto.", "date": "2026-10-31" }
    ],
    "tools": [], "games": [], "educacao": []
  }
}
```

Atenção: o Actions **reescreve** o `files.json` a cada commit. Para um item escrito à mão não sumir,
coloque `"manual": true` nele. Também dá pra usar `"url": "https://..."` no lugar de `"path"` para apontar para fora.

## Testar no computador

```bash
node scripts/build-files.mjs   # atualiza o files.json
python3 -m http.server 8000    # abra http://localhost:8000
```

(Abrir o `index.html` direto pelo arquivo não funciona, porque o navegador bloqueia a leitura do `files.json`.)

## Licença

MIT.
