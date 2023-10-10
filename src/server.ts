import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors"
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ai-completion";

const app = fastify()

app.register(fastifyCors, {
  origin: 'https://upload-ai-web-nu.vercel.app/',
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
  host: '0.0.0.0',
  port: process.env.PORT || 3333,
  // for render
}).then(() => {
  console.log('HTTP Server Running!')
})