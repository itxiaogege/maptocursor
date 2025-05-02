export interface Site {
  name: string
  url: string
  description: string
  icon?: string
}

export interface Category {
  name: string
  sites: Site[]
}

export const categories: Category[] = [
  {
    name: 'AI Chat Assistants',
    sites: [
      { name: 'ChatGPT', url: 'https://chat.openai.com', description: 'OpenAI\'s intelligent chat assistant, capable of natural language conversations, answering questions, writing, programming, and more.', icon: '/chatgpt.svg' },
      { name: 'Claude', url: 'https://claude.ai', description: 'Anthropic\'s AI assistant, excels at handling complex problems and providing detailed analysis.', icon: '/claude.svg' },
      { name: 'Gemini', url: 'https://gemini.google.com', description: 'Google\'s multimodal AI model, supporting text, images, code, and more.', icon: '/gemini.svg' },
      { name: 'Copilot', url: 'https://github.com/features/copilot', description: 'GitHub and OpenAI\'s AI programming assistant, helping developers write, understand, and optimize code.', icon: '/copilot.svg' },
      { name: 'Bing Chat', url: 'https://www.bing.com/chat', description: 'Microsoft\'s AI chat assistant, based on GPT-4, supports web search.', icon: '/bing.svg' },
      { name: 'Perplexity', url: 'https://www.perplexity.ai', description: 'AI-powered search engine, providing accurate, real-time answers.', icon: '/perplexity.svg' },
      { name: 'You.com', url: 'https://you.com', description: 'AI-powered search engine, providing personalized search results.', icon: '/you.svg' },
      { name: 'Character.AI', url: 'https://character.ai', description: 'Platform for chatting with various AI characters.', icon: '/character.svg' },
      { name: 'Poe', url: 'https://poe.com', description: 'Quora\'s AI chat platform, supporting multiple AI models.', icon: '/poe.svg' },
      { name: 'Pi', url: 'https://pi.ai', description: 'Inflection AI\'s personal AI assistant, focusing on conversation experience.', icon: '/pi.svg' },
      { name: 'HuggingChat', url: 'https://huggingface.co/chat', description: 'Open-source AI chat assistant, supporting multiple models.', icon: '/huggingface.svg' },
      { name: 'DeepSeek', url: 'https://chat.deepseek.com', description: 'DeepSeek\'s AI chat assistant, supporting long text processing.', icon: '/deepseek.svg' },
      { name: 'Mistral', url: 'https://mistral.ai', description: 'Open-source AI model platform, providing high-performance conversation capabilities.', icon: '/mistral.svg' },
      { name: 'Llama', url: 'https://llama.meta.com', description: 'Meta\'s open-source AI model, supporting local deployment.', icon: '/llama.svg' },
      { name: 'Cohere', url: 'https://cohere.com', description: 'Enterprise-level AI platform, providing strong conversation capabilities.', icon: '/cohere.svg' },
      { name: 'Anthropic', url: 'https://www.anthropic.com', description: 'AI research and development company, focusing on safe and reliable AI.', icon: '/anthropic.svg' },
      { name: 'DeepMind', url: 'https://deepmind.google', description: 'Google\'s AI research laboratory, developing cutting-edge AI technology.', icon: '/deepmind.svg' },
      { name: 'OpenAI', url: 'https://openai.com', description: 'Leading AI research company, developing GPT series models.', icon: '/openai.svg' },
      { name: 'AI21 Labs', url: 'https://www.ai21.com', description: 'Advanced AI language model development company.', icon: '/ai21.svg' },
      { name: 'Aleph Alpha', url: 'https://aleph-alpha.com', description: 'European AI research company, developing multi-language models.', icon: '/aleph.svg' }
    ]
  },
  {
    name: 'AI Creation Tools',
    sites: [
      { name: 'Midjourney', url: 'https://www.midjourney.com', description: 'Powerful AI image generation tool, creating high-quality artwork.', icon: '/midjourney.svg' },
      { name: 'DALL-E', url: 'https://openai.com/dall-e-3', description: 'OpenAI\'s AI image generation tool, supporting multiple styles.', icon: '/dalle.svg' },
      { name: 'Stable Diffusion', url: 'https://stablediffusionweb.com', description: 'Open-source AI image generation model, supporting local deployment.', icon: '/stablediffusion.svg' },
      { name: 'Leonardo.AI', url: 'https://leonardo.ai', description: 'AI art creation platform, supporting multiple art styles.', icon: '/leonardo.svg' },
      { name: 'Runway', url: 'https://runwayml.com', description: 'AI video creation tool, supporting video editing and effects.', icon: '/runway.svg' },
      { name: 'Canva AI', url: 'https://www.canva.com/ai-tools', description: 'AI design tool, helping users quickly create professional designs.', icon: '/canva.svg' },
      { name: 'Adobe Firefly', url: 'https://www.adobe.com/sensei/generative-ai/firefly.html', description: 'Adobe\'s AI creative tool suite.', icon: '/adobe.svg' },
      { name: 'Bing Image Creator', url: 'https://www.bing.com/create', description: 'Microsoft\'s AI image generation tool.', icon: '/bing.svg' },
      { name: 'DreamStudio', url: 'https://dreamstudio.ai', description: 'Stability AI\'s image generation platform.', icon: '/dreamstudio.svg' },
      { name: 'Artbreeder', url: 'https://www.artbreeder.com', description: 'AI art creation and mixing platform.', icon: '/artbreeder.svg' },
      { name: 'NightCafe', url: 'https://nightcafe.studio', description: 'AI art generation platform, supporting multiple art styles.', icon: '/nightcafe.svg' },
      { name: 'Deep Dream Generator', url: 'https://deepdreamgenerator.com', description: 'Neural network art generator, creating unique visual effects.', icon: '/deepdream.svg' },
      { name: 'Craiyon', url: 'https://www.craiyon.com', description: 'Free AI image generation tool, simple and easy to use.', icon: '/craiyon.svg' },
      { name: 'Playground AI', url: 'https://playground.ai', description: 'AI image creation platform, supporting multiple models.', icon: '/playground.svg' },
      { name: 'Lexica', url: 'https://lexica.art', description: 'AI art search and generation platform.', icon: '/lexica.svg' },
      { name: 'Stable Art', url: 'https://stableart.ai', description: 'AI art generation platform based on Stable Diffusion.', icon: '/stableart.svg' },
      { name: 'Dream by WOMBO', url: 'https://dream.ai', description: 'AI art creation tool, supporting multiple styles.', icon: '/wombo.svg' },
      { name: 'Fotor AI', url: 'https://www.fotor.com/features/ai-image-generator', description: 'AI image generation and editing tool.', icon: '/fotor.svg' },
      { name: 'Picsart AI', url: 'https://picsart.com/ai', description: 'AI photo editing and generation tool.', icon: '/picsart.svg' },
      { name: 'PhotoRoom', url: 'https://www.photoroom.com', description: 'AI background removal and editing tool.', icon: '/photoroom.svg' }
    ]
  },
  {
    name: 'AI Office Assistants',
    sites: [
      { name: 'Notion AI', url: 'https://www.notion.so/product/ai', description: 'Notion\'s AI assistant, helping with writing, summarizing, and brainstorming.', icon: '/notion.svg' },
      { name: 'Grammarly', url: 'https://www.grammarly.com', description: 'AI writing assistant, helping check and improve writing.', icon: '/grammarly.svg' },
      { name: 'Jasper', url: 'https://www.jasper.ai', description: 'AI content creation platform, supporting various writing scenarios.', icon: '/jasper.svg' },
      { name: 'Copy.ai', url: 'https://www.copy.ai', description: 'AI copywriting tool, helping generate marketing content.', icon: '/copyai.svg' },
      { name: 'Writesonic', url: 'https://writesonic.com', description: 'AI content creation platform, supporting various writing needs.', icon: '/writesonic.svg' },
      { name: 'Rytr', url: 'https://rytr.me', description: 'AI writing assistant, supporting multiple writing styles.', icon: '/rytr.svg' },
      { name: 'Wordtune', url: 'https://www.wordtune.com', description: 'AI writing assistant, helping improve writing expression.', icon: '/wordtune.svg' },
      { name: 'Quillbot', url: 'https://quillbot.com', description: 'AI rewriting tool, helping optimize text expression.', icon: '/quillbot.svg' },
      { name: 'Sudowrite', url: 'https://www.sudowrite.com', description: 'AI novel writing assistant.', icon: '/sudowrite.svg' },
      { name: 'HyperWrite', url: 'https://hyperwrite.ai', description: 'AI writing assistant, supporting multiple writing scenarios.', icon: '/hyperwrite.svg' },
      { name: 'Writer', url: 'https://writer.com', description: 'Enterprise-level AI writing platform, supporting team collaboration.', icon: '/writer.svg' },
      { name: 'Anyword', url: 'https://anyword.com', description: 'AI copywriting tool, optimizing marketing content.', icon: '/anyword.svg' },
      { name: 'Peppertype', url: 'https://www.peppertype.ai', description: 'AI content creation platform, supporting multiple scenarios.', icon: '/peppertype.svg' },
      { name: 'Simplified', url: 'https://simplified.com', description: 'AI content creation and design platform.', icon: '/simplified.svg' },
      { name: 'ContentBot', url: 'https://contentbot.ai', description: 'AI content generation tool, supporting multiple formats.', icon: '/contentbot.svg' },
      { name: 'CopySmith', url: 'https://copysmith.ai', description: 'AI copywriting tool, focusing on marketing content.', icon: '/copysmith.svg' },
      { name: 'Kafkai', url: 'https://kafkai.com', description: 'AI article generation tool, supporting multiple topics.', icon: '/kafkai.svg' },
      { name: 'Article Forge', url: 'https://www.articleforge.com', description: 'AI article writing tool, automatically generating content.', icon: '/articleforge.svg' },
      { name: 'INK', url: 'https://inkforall.com', description: 'AI content optimization tool, improving SEO effects.', icon: '/ink.svg' },
      { name: 'Scalenut', url: 'https://www.scalenut.com', description: 'AI content creation platform, supporting multiple needs.', icon: '/scalenut.svg' }
    ]
  },
  {
    name: 'AI Programming Tools',
    sites: [
      { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', description: 'AI programming assistant, helping write and optimize code.', icon: '/copilot.svg' },
      { name: 'Cursor', url: 'https://cursor.sh', description: 'AI-powered code editor, supporting intelligent completion and chat.', icon: '/cursor.svg' },
      { name: 'Codeium', url: 'https://codeium.com', description: 'AI code completion tool, supporting multiple programming languages.', icon: '/codeium.svg' },
      { name: 'Tabnine', url: 'https://www.tabnine.com', description: 'AI code completion tool, supporting multiple IDEs.', icon: '/tabnine.svg' },
      { name: 'Replit', url: 'https://replit.com', description: 'AI-powered online programming platform.', icon: '/replit.svg' },
      { name: 'Phind', url: 'https://www.phind.com', description: 'AI programming search engine, helping solve programming problems.', icon: '/phind.svg' },
      { name: 'Sourcegraph Cody', url: 'https://sourcegraph.com/cody', description: 'AI programming assistant, supporting code understanding and generation.', icon: '/sourcegraph.svg' },
      { name: 'Amazon CodeWhisperer', url: 'https://aws.amazon.com/codewhisperer', description: 'AWS\'s AI programming assistant.', icon: '/aws.svg' },
      { name: 'JetBrains AI', url: 'https://www.jetbrains.com/ai', description: 'JetBrains IDE\'s AI assistant.', icon: '/jetbrains.svg' },
      { name: 'CodeT5', url: 'https://github.com/salesforce/CodeT5', description: 'Open-source AI code generation model.', icon: '/codet5.svg' },
      { name: 'Codex', url: 'https://openai.com/blog/openai-codex', description: 'OpenAI\'s code generation model.', icon: '/openai.svg' },
      { name: 'Code Llama', url: 'https://ai.meta.com/llama/code-llama', description: 'Meta\'s code generation model.', icon: '/meta.svg' },
      { name: 'StarCoder', url: 'https://huggingface.co/bigcode/starcoder', description: 'Open-source code generation model.', icon: '/starcoder.svg' },
      { name: 'CodeGeeX', url: 'https://codegeex.cn', description: 'Multi-language code generation tool.', icon: '/codegeex.svg' },
      { name: 'CodeT5+', url: 'https://github.com/salesforce/CodeT5', description: 'Advanced code generation model.', icon: '/codet5.svg' },
      { name: 'PolyCoder', url: 'https://github.com/VHellendoorn/Code-LMs', description: 'Open-source code generation model.', icon: '/polycoder.svg' },
      { name: 'CodeParrot', url: 'https://huggingface.co/codeparrot', description: 'Python code generation model.', icon: '/codeparrot.svg' },
      { name: 'CodeGen', url: 'https://github.com/salesforce/CodeGen', description: 'Program synthesis tool.', icon: '/codegen.svg' },
      { name: 'InCoder', url: 'https://huggingface.co/facebook/incoder', description: 'Code filling tool.', icon: '/incoder.svg' },
      { name: 'SantaCoder', url: 'https://huggingface.co/bigcode/santacoder', description: 'Small code generation model.', icon: '/santacoder.svg' }
    ]
  },
  {
    name: 'AI Video Tools',
    sites: [
      { name: 'Runway', url: 'https://runwayml.com', description: 'AI video creation and editing platform.', icon: '/runway.svg' },
      { name: 'Synthesia', url: 'https://www.synthesia.io', description: 'AI video generation platform, supporting digital human videos.', icon: '/synthesia.svg' },
      { name: 'HeyGen', url: 'https://www.heygen.com', description: 'AI video generation platform, supporting digital human videos.', icon: '/heygen.svg' },
      { name: 'D-ID', url: 'https://www.d-id.com', description: 'AI video generation platform, supporting digital human videos.', icon: '/did.svg' },
      { name: 'Pictory', url: 'https://pictory.ai', description: 'AI video creation platform, supporting text-to-video.', icon: '/pictory.svg' },
      { name: 'InVideo', url: 'https://invideo.io', description: 'AI video creation platform, supporting multiple video templates.', icon: '/invideo.svg' },
      { name: 'Lumen5', url: 'https://lumen5.com', description: 'AI video creation platform, supporting text-to-video.', icon: '/lumen5.svg' },
      { name: 'Synthesys', url: 'https://synthesys.io', description: 'AI video and voice generation platform.', icon: '/synthesys.svg' },
      { name: 'Elai', url: 'https://elai.io', description: 'AI video generation platform, supporting digital human videos.', icon: '/elai.svg' },
      { name: 'Colossyan', url: 'https://www.colossyan.com', description: 'AI video generation platform, supporting digital human videos.', icon: '/colossyan.svg' },
      { name: 'DeepBrain AI', url: 'https://www.deepbrain.io', description: 'AI video generation platform, supporting digital human videos.', icon: '/deepbrain.svg' },
      { name: 'Rephrase.ai', url: 'https://www.rephrase.ai', description: 'AI video creation platform, supporting digital human videos.', icon: '/rephrase.svg' },
      { name: 'Veed.io', url: 'https://www.veed.io', description: 'AI video editing platform, supporting multiple effects.', icon: '/veed.svg' },
      { name: 'Descript', url: 'https://www.descript.com', description: 'AI video editing platform, supporting speech-to-text.', icon: '/descript.svg' },
      { name: 'Kapwing', url: 'https://www.kapwing.com', description: 'AI video creation tool, supporting multiple functions.', icon: '/kapwing.svg' },
      { name: 'Fliki', url: 'https://fliki.ai', description: 'AI video creation platform, supporting text-to-video.', icon: '/fliki.svg' },
      { name: 'Wondershare Filmora', url: 'https://filmora.wondershare.com', description: 'AI video editing software, supporting multiple effects.', icon: '/filmora.svg' },
      { name: 'Adobe Premiere Pro', url: 'https://www.adobe.com/products/premiere.html', description: 'AI video editing software, professional-level features.', icon: '/adobe.svg' },
      { name: 'Final Cut Pro', url: 'https://www.apple.com/final-cut-pro', description: 'AI video editing software, supporting multiple effects.', icon: '/apple.svg' },
      { name: 'DaVinci Resolve', url: 'https://www.blackmagicdesign.com/products/davinciresolve', description: 'AI video editing software, professional-level features.', icon: '/davinci.svg' }
    ]
  },
  {
    name: 'AI Audio Tools',
    sites: [
      { name: 'ElevenLabs', url: 'https://elevenlabs.io', description: 'AI voice synthesis platform, supporting multiple languages and voices.', icon: '/elevenlabs.svg' },
      { name: 'Murf', url: 'https://murf.ai', description: 'AI voice generation platform, supporting multiple languages and voices.', icon: '/murf.svg' },
      { name: 'Descript', url: 'https://www.descript.com', description: 'AI audio editing platform, supporting speech-to-text and editing.', icon: '/descript.svg' },
      { name: 'Synthesia', url: 'https://www.synthesia.io', description: 'AI video and voice generation platform.', icon: '/synthesia.svg' },
      { name: 'Resemble AI', url: 'https://www.resemble.ai', description: 'AI voice cloning platform, supporting custom voices.', icon: '/resemble.svg' },
      { name: 'Play.ht', url: 'https://play.ht', description: 'AI voice generation platform, supporting multiple languages and voices.', icon: '/playht.svg' },
      { name: 'Lovo', url: 'https://lovo.ai', description: 'AI voice generation platform, supporting multiple languages and voices.', icon: '/lovo.svg' },
      { name: 'WellSaid Labs', url: 'https://wellsaidlabs.com', description: 'AI voice synthesis platform, supporting high-quality voice.', icon: '/wellsaid.svg' },
      { name: 'Speechify', url: 'https://speechify.com', description: 'AI text-to-speech platform, supporting multiple languages.', icon: '/speechify.svg' },
      { name: 'Amazon Polly', url: 'https://aws.amazon.com/polly', description: 'AWS\'s AI voice synthesis service.', icon: '/aws.svg' },
      { name: 'Google Cloud TTS', url: 'https://cloud.google.com/text-to-speech', description: 'Google\'s text-to-speech service.', icon: '/google.svg' },
      { name: 'Microsoft Azure TTS', url: 'https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech', description: 'Azure\'s text-to-speech service.', icon: '/microsoft.svg' },
      { name: 'IBM Watson TTS', url: 'https://www.ibm.com/cloud/watson-text-to-speech', description: 'IBM\'s text-to-speech service.', icon: '/ibm.svg' },
      { name: 'Coqui TTS', url: 'https://github.com/coqui-ai/TTS', description: 'Open-source text-to-speech tool.', icon: '/coqui.svg' },
      { name: 'Tortoise TTS', url: 'https://github.com/neonbjb/tortoise-tts', description: 'Open-source text-to-speech tool.', icon: '/tortoise.svg' },
      { name: 'VALL-E', url: 'https://valle-demo.github.io', description: 'Neural text-to-speech tool.', icon: '/valle.svg' },
      { name: 'Bark', url: 'https://github.com/suno-ai/bark', description: 'Text-to-audio tool.', icon: '/bark.svg' },
      { name: 'Whisper', url: 'https://github.com/openai/whisper', description: 'Speech recognition tool.', icon: '/openai.svg' },
      { name: 'AssemblyAI', url: 'https://www.assemblyai.com', description: 'Speech AI platform.', icon: '/assemblyai.svg' },
      { name: 'Rev AI', url: 'https://www.rev.ai', description: 'Speech recognition service.', icon: '/rev.svg' }
    ]
  },
  {
    name: 'AI Learning Tools',
    sites: [
      { name: 'Khanmigo', url: 'https://www.khanacademy.org/khan-labs', description: 'Khan Academy\'s AI learning assistant.', icon: '/khan.svg' },
      { name: 'Duolingo Max', url: 'https://www.duolingo.com/max', description: 'Duolingo\'s AI language learning features.', icon: '/duolingo.svg' },
      { name: 'Quizlet', url: 'https://quizlet.com/features/ai', description: 'Quizlet\'s AI learning features.', icon: '/quizlet.svg' },
      { name: 'Coursera', url: 'https://www.coursera.org', description: 'Online learning platform, offering AI-related courses.', icon: '/coursera.svg' },
      { name: 'Udemy', url: 'https://www.udemy.com', description: 'Online learning platform, offering AI-related courses.', icon: '/udemy.svg' },
      { name: 'DeepLearning.AI', url: 'https://www.deeplearning.ai', description: 'AI learning resource platform, offering professional courses.', icon: '/deeplearning.svg' },
      { name: 'Fast.ai', url: 'https://www.fast.ai', description: 'Practical deep learning course platform.', icon: '/fastai.svg' },
      { name: 'Kaggle', url: 'https://www.kaggle.com', description: 'Data science and machine learning learning platform.', icon: '/kaggle.svg' },
      { name: 'DataCamp', url: 'https://www.datacamp.com', description: 'Data science learning platform.', icon: '/datacamp.svg' },
      { name: 'edX', url: 'https://www.edx.org', description: 'Online learning platform, offering AI-related courses.', icon: '/edx.svg' },
      { name: 'Udacity', url: 'https://www.udacity.com', description: 'Technical education platform, offering AI courses.', icon: '/udacity.svg' },
      { name: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu', description: 'MIT free course platform, including AI courses.', icon: '/mit.svg' },
      { name: 'Stanford Online', url: 'https://online.stanford.edu', description: 'Stanford online course, including AI courses.', icon: '/stanford.svg' },
      { name: 'Harvard Online', url: 'https://online-learning.harvard.edu', description: 'Harvard online course, including AI courses.', icon: '/harvard.svg' },
      { name: 'Google AI', url: 'https://ai.google/education', description: 'Google AI education resources.', icon: '/google.svg' },
      { name: 'Microsoft Learn', url: 'https://learn.microsoft.com', description: 'Microsoft learning platform, including AI courses.', icon: '/microsoft.svg' },
      { name: 'IBM Skills', url: 'https://www.ibm.com/training', description: 'IBM training platform, including AI courses.', icon: '/ibm.svg' },
      { name: 'NVIDIA DLI', url: 'https://www.nvidia.com/en-us/training', description: 'NVIDIA deep learning training.', icon: '/nvidia.svg' },
      { name: 'TensorFlow', url: 'https://www.tensorflow.org/learn', description: 'TensorFlow learning resources.', icon: '/tensorflow.svg' },
      { name: 'PyTorch', url: 'https://pytorch.org/tutorials', description: 'PyTorch tutorial resources.', icon: '/pytorch.svg' }
    ]
  },
  {
    name: 'AI Music Tools',
    sites: [
      { name: 'Boomy', url: 'https://boomy.com', description: 'AI music creation platform, supporting multiple styles.', icon: '/boomy.svg' },
      { name: 'Soundraw', url: 'https://soundraw.io', description: 'AI music generation platform, supporting multiple styles.', icon: '/soundraw.svg' },
      { name: 'AIVA', url: 'https://www.aiva.ai', description: 'AI music creation platform, supporting multiple styles.', icon: '/aiva.svg' },
      { name: 'Amper Music', url: 'https://www.ampermusic.com', description: 'AI music creation platform, supporting multiple styles.', icon: '/amper.svg' },
      { name: 'Soundful', url: 'https://soundful.com', description: 'AI music generation platform, supporting multiple styles.', icon: '/soundful.svg' },
      { name: 'Mubert', url: 'https://mubert.com', description: 'AI music platform, supporting multiple styles.', icon: '/mubert.svg' },
      { name: 'Ecrett Music', url: 'https://ecrettmusic.com', description: 'AI music creation platform, supporting multiple styles.', icon: '/ecrett.svg' },
      { name: 'LALAL.AI', url: 'https://www.lalal.ai', description: 'AI audio separation tool.', icon: '/lalal.svg' },
      { name: 'Moises', url: 'https://moises.ai', description: 'AI music separation tool.', icon: '/moises.svg' },
      { name: 'Spleeter', url: 'https://github.com/deezer/spleeter', description: 'Open-source AI audio separation tool.', icon: '/spleeter.svg' },
      { name: 'iZotope RX', url: 'https://www.izotope.com/en/products/rx.html', description: 'AI audio repair tool.', icon: '/izotope.svg' },
      { name: 'LANDR', url: 'https://www.landr.com', description: 'AI mastering tool for audio.', icon: '/landr.svg' },
      { name: 'Ozone', url: 'https://www.izotope.com/en/products/ozone.html', description: 'AI mastering tool.', icon: '/ozone.svg' },
      { name: 'MasteringBOX', url: 'https://www.masteringbox.com', description: 'AI mastering tool.', icon: '/masteringbox.svg' },
      { name: 'BandLab', url: 'https://www.bandlab.com', description: 'AI music creation platform.', icon: '/bandlab.svg' },
      { name: 'Splice', url: 'https://splice.com', description: 'AI music sample platform.', icon: '/splice.svg' },
      { name: 'Output', url: 'https://output.com', description: 'AI music tool platform.', icon: '/output.svg' },
      { name: 'Native Instruments', url: 'https://www.native-instruments.com', description: 'AI music creation tool.', icon: '/native.svg' },
      { name: 'Ableton Live', url: 'https://www.ableton.com', description: 'AI music creation software.', icon: '/ableton.svg' },
      { name: 'FL Studio', url: 'https://www.image-line.com', description: 'AI music creation software.', icon: '/flstudio.svg' }
    ]
  },
  {
    name: 'AI Tools Platform',
    sites: [
      { name: 'Hugging Face', url: 'https://huggingface.co', description: 'AI model platform, providing multiple models.', icon: '/huggingface.svg' },
      { name: 'Replicate', url: 'https://replicate.com', description: 'AI model deployment platform.', icon: '/replicate.svg' },
      { name: 'LangChain', url: 'https://www.langchain.com', description: 'AI application development framework.', icon: '/langchain.svg' },
      { name: 'LlamaIndex', url: 'https://www.llamaindex.ai', description: 'AI data indexing tool.', icon: '/llamaindex.svg' },
      { name: 'AutoGPT', url: 'https://autogpt.net', description: 'AI automation tool.', icon: '/autogpt.svg' },
      { name: 'AgentGPT', url: 'https://agentgpt.reworkd.ai', description: 'AI agent platform.', icon: '/agentgpt.svg' },
      { name: 'OpenAI API', url: 'https://platform.openai.com', description: 'OpenAI API platform.', icon: '/openai.svg' },
      { name: 'Anthropic API', url: 'https://console.anthropic.com', description: 'Anthropic API platform.', icon: '/anthropic.svg' },
      { name: 'Google AI Studio', url: 'https://makersuite.google.com', description: 'Google AI tool platform.', icon: '/google.svg' },
      { name: 'Microsoft Azure AI', url: 'https://azure.microsoft.com/en-us/services/cognitive-services', description: 'Azure AI service platform.', icon: '/microsoft.svg' },
      { name: 'AWS AI Services', url: 'https://aws.amazon.com/ai', description: 'AWS AI service platform.', icon: '/aws.svg' },
      { name: 'IBM Watson', url: 'https://www.ibm.com/watson', description: 'IBM AI platform.', icon: '/ibm.svg' },
      { name: 'TensorFlow', url: 'https://www.tensorflow.org', description: 'Google\'s machine learning framework.', icon: '/tensorflow.svg' },
      { name: 'PyTorch', url: 'https://pytorch.org', description: 'Facebook\'s machine learning framework.', icon: '/pytorch.svg' },
      { name: 'JAX', url: 'https://github.com/google/jax', description: 'Google\'s machine learning framework.', icon: '/jax.svg' },
      { name: 'ONNX', url: 'https://onnx.ai', description: 'Open Neural Network Exchange Format.', icon: '/onnx.svg' },
      { name: 'MLflow', url: 'https://mlflow.org', description: 'Machine learning life cycle platform.', icon: '/mlflow.svg' },
      { name: 'Weights & Biases', url: 'https://wandb.ai', description: 'Machine learning experiment tracking platform.', icon: '/wandb.svg' },
      { name: 'Comet ML', url: 'https://www.comet.com', description: 'Machine learning experiment tracking platform.', icon: '/comet.svg' },
      { name: 'Neptune', url: 'https://neptune.ai', description: 'Machine learning experiment tracking platform.', icon: '/neptune.svg' }
    ]
  }
] 