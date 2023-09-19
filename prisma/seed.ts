import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.prompt.deleteMany()

  await prisma.prompt.create({
    data: {
      title: 'Título YouTube',
      template: `Seu papel é gerar três títulos para um vídeo do YouTube.

Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar os títulos.
Abaixo você também receberá uma lista de títulos, use essa lista como referência para os títulos a serem gerados.

Os títulos devem ter no máximo 60 caracteres.
Os títulos devem ser chamativos e atrativos para maximizar os cliques.

Retorne APENAS os três títulos em formato de lista como no exemplo abaixo:
'''
- Título 1
- Título 2
- Título 3
'''

Transcrição:
'''
{transcription}
'''`.trim()
    }
  })

  await prisma.prompt.create({
    data: {
      title: 'Descrição YouTube',
      template: `Seu papel é gerar uma descrição sucinta para um vídeo do YouTube.
  
Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar a descrição.

A descrição deve possuir no máximo 80 palavras em primeira pessoa contendo os pontos principais do vídeo.

Use palavras chamativas e que cativam a atenção de quem está lendo.

Além disso, no final da descrição inclua uma lista de 3 até 10 hashtags em letra minúscula contendo palavras-chave do vídeo.

O retorno deve seguir o seguinte formato:
'''
Descrição.

#hashtag1 #hashtag2 #hashtag3 ...
'''

Transcrição:
'''
{transcription}
'''`.trim()
    }
  })

  await prisma.prompt.create({
    data: {
      title: 'Resumo do Vídeo',
      template: `Seu papel é gerar um resumo para o vídeo carregado.
  
Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar o resumo.

O resumo deve conter os pontos principais do vídeo.

O retorno deve seguir o seguinte formato:
'''
Resumo.
'''

Transcrição:
'''
{transcription}
'''`.trim()
    }
  })

  await prisma.prompt.create({
    data: {
      title: 'Traduzir Vídeo',
      template: `Seu papel é detectar a a linguagem falada no vídeo e gerar a transcrição do vídeo para a língua portuguesa pt-br.
    
  Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar a transcrição em pt-br.
  
  A trancrição deve traduzir o vídeo de forma fiel e coesa, contextualizando para o dialeto e termos comumente usados na linguagem para qual o vídeo será traduzido.

  Separe também em três capitulos, INÍCIO, MEIO e FIM. 
  
  O retorno deve seguir o seguinte formato:
  '''
  Idioma falado: Idioma

  Vídeo:
    - Capítulo 1 INÍCIO: 
        Tradução abordando o assunto tema principal do início do vídeo

    - Capítulo 2 MEIO: 
        Tradução abordando o assunto tema principal do meio do vídeo

    - Capítulo 3 FIM:
        Tradução abordando o assunto tema principal do fim do vídeo
  '''
  
  Transcrição:
  '''
  {transcription}
  '''`.trim()
    }
  })

  await prisma.prompt.create({
    data: {
      title: 'Quiz',
      template: `Seu papel é gerar um quiz para o vídeo carregado.

Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar um quiz.
Abaixo você também receberá uma lista de perguntas e respostas, use essa lista como referência para o quiz a ser gerado.

O quiz deve ser utilizado para treinar o espectador, a fim de que ele entenda melhor e absorva o conteúdo passado.
O quiz deve ser intuitivo, incentivando o espectador a prestar atenção e responder corretamente.

Retorne três perguntas, contendo três respostas erradas e uma certa, de forma aleatória.
Ao final, retorne também o gabarito das perguntas do quiz.

O quiz deve ser em formato de lista como no exemplo abaixo:
'''
- Pergunta 1
  - Resposta para Pergunta 1
  - Resposta para Pergunta 1
  - Resposta para Pergunta 1
  - Resposta para Pergunta 1

- Pergunta 2
  - Resposta para Pergunta 2
  - Resposta para Pergunta 2
  - Resposta para Pergunta 2
  - Resposta para Pergunta 2

- Pergunta 3
  - Resposta para Pergunta 3
  - Resposta para Pergunta 3
  - Resposta para Pergunta 3
  - Resposta para Pergunta 3

  Gabarito:
  - Resposta correta para a pergunta 1
  - Resposta correta para a pergunta 2
  - Resposta correta para a pergunta 3
'''

Transcrição:
'''
{transcription}
'''`.trim()
    }
  })

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })