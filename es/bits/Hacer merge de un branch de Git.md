---
tech:
  - "[[git]]"
---
Para realizar un merge de un branch en Git, sigue estos pasos básicos en tu terminal o línea de comandos:

1. **Asegúrate de estar en el branch correcto**: Primero, cambia al branch donde deseas integrar los cambios. Por ejemplo, para cambiar al branch `main`, usa:
   ```bash
   git checkout main
   ```

2. **Actualiza tu branch local**: Es una buena práctica actualizar tu branch local con los últimos cambios del repositorio remoto antes de hacer un merge. Esto se hace con:
   ```bash
   git pull origin main
   ```

3. **Elige una estrategia de merge**: Dependiendo de tus necesidades, puedes elegir diferentes estrategias de merge:

   - **Merge Commit (`--no-ff`)**: Crea un commit de merge que conserva la historia de ambos branches.
     ```bash
     git merge <nombre-del-branch> --no-ff
     ```
   
   - **Fast-Forward (`--ff`)**: Avanza el puntero del branch actual si no hay cambios divergentes.
     ```bash
     git merge <nombre-del-branch> --ff
     ```

   - **Squash Merge (`--squash`)**: Combina todos los cambios en un solo commit en el branch objetivo.
     ```bash
     git merge <nombre-del-branch> --squash
     ```

   - **No-Fast-Forward sin Commit (`--no-commit`)**: Permite revisar y modificar el resultado del merge antes de hacer el commit.
     ```bash
     git merge <nombre-del-branch> --no-ff --no-commit
     ```

   - **Rebase**: Una alternativa que aplica cambios de un branch sobre otro.
     ```bash
     git rebase <nombre-del-branch>
     ```

3. **Resuelve conflictos si los hay**: Si hay conflictos, Git te lo indicará. Deberás resolver estos conflictos manualmente editando los archivos afectados y luego hacer un commit de los cambios.

4. **Completa el merge**: Una vez resueltos los conflictos, si los hubo, y seleccionada tu estrategia de merge, completa el proceso con un commit si es necesario.

Recuerda que cada estrategia de merge afecta de manera diferente el historial de tu repositorio. Elige la que mejor se adapte a las necesidades de tu flujo de trabajo. Además, es recomendable hacer una copia de seguridad o estar familiarizado con los comandos de Git antes de realizar operaciones complejas como merges o rebases.