 ## Prisma AI Video Generation

This project demonstrates how to use Prisma, OpenAI, and Fastify to generate AI-powered video content.

### Step 1: Install dependencies

```sh
npm install
```

### Step 2: Configure environment variables

Create a `.env` file and add your OpenAI API key.

```sh
OPENAI_KEY=<your-openai-api-key>
```

### Step 3: Create the database schema

Run the following command to create the database schema.

```sh
npx prisma migrate dev
```

### Step 4: Seed the database

Run the following command to seed the database with some prompts.

```sh
npx prisma seed
```

### Step 5: Start the server

Run the following command to start the server.

```sh
npm start
```

### Step 6: Test the API

Use the following cURL commands to test the API.

```sh
# Get all prompts
curl http://localhost:3333/prompts

# Upload a video
curl -F "file=@audio.mp3" http://localhost:3333/videos

# Create a transcription
curl -X POST -H "Content-Type: application/json" -d '{"prompt": "Arte, no capricho"}' http://localhost:3333/videos/e9124653-6372-408b-aeb0-7dd87521cd6e/transcription

# Generate AI completion
curl -X POST -H "Content-Type: application/json" -d '{"videoId": "e9124653-6372-408b-aeb0-7dd87521cd6e", "prompt": "Gere um resumo sucinto da transcrição do vídeo informada a seguir: '''{transcription}'''"}' http://localhost:3333/ai/complete
```

### Conclusion

This project demonstrates how to use Prisma, OpenAI, and Fastify to generate AI-powered video content. You can use this project as a starting point for your own AI-powered video projects.