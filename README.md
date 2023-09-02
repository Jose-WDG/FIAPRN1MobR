# Projeto Final de React Native

Este é o nosso projeto de grupo para desenvolver um aplicativo React Native com integração ao Firebase.

## Tarefas

- Criar uma página "Membros" no menu lateral que levará para uma tela com a foto de todos os participantes do grupo. Cada foto levará para uma tela do participante.
    - [X] Criar uma opção "Membros" no menu lateral.
    - [X] Ao clicar em "Membros", redirecionar para uma tela que mostra as fotos de todos os participantes do grupo.
    - [X] Garantir que ao clicar na foto de um participante, o usuário seja levado para a tela pessoal desse participante.

  
  - **Pontuação**: 2,0 pontos

- [X] Cada participante terá uma página personalizada. Portanto, além da tela de "Membros", haverá mais 4 telas (uma para cada). Estas páginas incluirão uma breve descrição sobre o participante, sua foto, e links para seus perfis Github e LinkedIn.
  
  - [X] Criar 4 telas individuais (uma para cada participante).
        - [X] Para o Participante 1:
            - [X] Adicionar foto.
            - [X] Escrever uma breve descrição/biografia.
            - [X] Adicionar links para Github e LinkedIn utilizando [Linking](https://reactnative.dev/docs/linking#openurl).
        - [X] Para o Participante 2: (repita as sub-tarefas acima).
  
  - **Pontuação**: 6,0 pontos

- [X] Verificar a conexão com o Firebase. Se não estiver conectando corretamente, criar um projeto próprio no Firebase e adicionar o "google-services.json" no local apropriado. 
  
   - [x] Verificar se o projeto está conectando corretamente ao Firebase.
    - [X] Se não estiver conectando:
        - [X] Criar um novo projeto no Firebase.
        - [X] Obter o arquivo "google-services.json".
        - [X] Colocar o arquivo "google-services.json" na pasta `android/app/` conforme [instruções](https://rnfirebase.io/#2-android-setup).
  
  - **Nota**: Caso não seja possível completar esta tarefa, remover a verificação do arquivo "index.tsx" na pasta de rotas.
  
  - **Pontuação**: 1,0 pontos

## Exemplo de Uso

Substituir `{user ? <LoggedStack /> : <UnloggedStack />}` por `<LoggedStack />`.

## Estrutura do Projeto

- Tela 1
- Tela 2
- Membros:
    - Participante 1
    - Participante 2

## Instruções

- Mantenha a estrutura atual do projeto.
- Atente-se às tipagens corretas.
- Seja criativo!

## Entrega

A entrega do projeto será feita através de um arquivo `.txt` contendo o link para o repositório do projeto no GitHub.

---
## Demonstração

|                       Tela e Menu Membros                        |                    Redirecionamento via link                    |
|:----------------------------------------------------------------:|:---------------------------------------------------------------:|
|    <img src="docs/react-native-final-preview.gif" width=80%>     | <img src="docs/react-native-final-links-preview.gif" width=80%> |
