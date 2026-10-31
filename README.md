# ARQUIVOS.EXE 🗂️

Um site retrô que funciona como um **explorador de arquivos**: cada "arquivo" é uma página,
organizada em pastas por categoria. Clicou, a página abre em uma nova aba.

## Como funciona

- O explorador tem 4 pastas: **Projetos**, **Tools**, **Games** e **Educação**
  (no repositório: `projects/`, `tools/`, `games/` e `educacao/`).
- Cada página é independente e mora na própria pasta, com o próprio `index.html`:

  ```
  tools/
  └── meu-conversor/
      ├── index.html
      ├── project.json   (opcional)
      └── imagens, css, js...
  ```

- A cada commit na `main`, o GitHub Actions lê essas pastas, monta a lista de páginas (`files.json`)
  e publica o site sozinho. Não precisa editar nada à mão.
- Pastas que começam com `_` ou `.` não aparecem no site (por isso o `_modelo` fica escondido).

Endereço de cada página: `https://<conta>.github.io/<repositorio>/<categoria>/<nome>/`

## Como adicionar uma página

1. Entre na pasta da categoria (ex.: `tools`).
2. Clique em **Add file → Upload files** e arraste a pasta da página inteira
   (ex.: `meu-conversor`, com o `index.html` dentro).
   Use no nome só letras minúsculas, números e hífen, sem espaço e sem acento.
3. Clique em **Commit changes**.
4. Espere o check verde na aba **Actions** (1 a 2 minutos) e recarregue o site.

Opcional: um `project.json` dentro da pasta define o nome, a descrição e a data que aparecem no explorador.
Use o `_modelo` da categoria como base:

```json
{
  "title": "Meu Conversor",
  "description": "Converte imagens para WebP direto no navegador.",
  "date": "2026-10-31"
}
```

Sem ele, o site usa o `<title>` e a descrição do próprio `index.html`.

## Como remover uma página

1. Abra a pasta da página (ex.: `tools/meu-conversor/`).
2. Em cada arquivo, clique em **… → Delete file** e confirme com **Commit changes**.
   Quando a pasta fica vazia, ela some.
3. Espere o check verde na aba **Actions**. A página sai do explorador sozinha.

Apagou errado? Abra o commit em que apagou e clique em **Revert**.

## Licença

MIT.
