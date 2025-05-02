'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Script from 'next/script'

export const categories = [
  {
    name: 'AI对话助手',
    sites: [
      { name: 'ChatGPT', url: 'https://chat.openai.com', description: 'OpenAI开发的智能对话助手，可以进行自然语言对话、回答问题、写作、编程等多种任务。', icon: '/chatgpt.svg' },
      { name: 'Claude', url: 'https://claude.ai', description: 'Anthropic开发的AI助手，擅长处理复杂问题，提供详细的分析和解释。' },
      { name: 'Gemini', url: 'https://gemini.google.com', description: 'Google开发的多模态AI模型，支持文本、图像、代码等多种输入输出。', icon: '/gemini.svg' },
      { name: 'Copilot', url: 'https://github.com/features/copilot', description: 'GitHub和OpenAI合作开发的AI编程助手，帮助开发者编写、理解和优化代码。', icon: '/copilot.svg' },
      { name: 'Bing Chat', url: 'https://www.bing.com/chat', description: '微软开发的AI对话助手，基于GPT-4，支持联网搜索。', icon: '/bing.svg' },
      { name: 'Perplexity', url: 'https://www.perplexity.ai', description: 'AI驱动的搜索引擎，提供准确、实时的答案。', icon: '/perplexity.svg' },
      { name: 'You.com', url: 'https://you.com', description: 'AI驱动的搜索引擎，提供个性化搜索结果。', icon: '/you.svg' },
      { name: 'Character.AI', url: 'https://character.ai', description: '可以与各种AI角色进行对话的平台。', icon: '/character.svg' },
      { name: 'Poe', url: 'https://poe.com', description: 'Quora开发的AI对话平台，支持多种AI模型。', icon: '/poe.svg' },
      { name: 'Pi', url: 'https://pi.ai', description: 'Inflection AI开发的个人AI助手，专注于对话体验。', icon: '/pi.svg' },
      { name: 'HuggingChat', url: 'https://huggingface.co/chat', description: '开源的AI对话助手，支持多种模型。', icon: '/huggingface.svg' },
      { name: 'DeepSeek', url: 'https://chat.deepseek.com', description: '深度求索开发的AI对话助手，支持长文本处理。', icon: '/deepseek.svg' },
      { name: 'Mistral', url: 'https://mistral.ai', description: '开源的AI模型平台，提供高性能对话能力。', icon: '/mistral.svg' },
      { name: 'Llama', url: 'https://llama.meta.com', description: 'Meta开发的开源AI模型，支持本地部署。', icon: '/llama.svg' },
      { name: 'Cohere', url: 'https://cohere.com', description: '企业级AI平台，提供强大的对话能力。', icon: '/cohere.svg' },
      { name: 'Anthropic', url: 'https://www.anthropic.com', description: 'AI研究和开发公司，专注于安全可靠的AI。', icon: '/anthropic.svg' },
      { name: 'DeepMind', url: 'https://deepmind.google', description: 'Google的AI研究实验室，开发前沿AI技术。', icon: '/deepmind.svg' },
      { name: 'OpenAI', url: 'https://openai.com', description: '领先的AI研究公司，开发GPT系列模型。', icon: '/openai.svg' },
      { name: 'AI21 Labs', url: 'https://www.ai21.com', description: '先进的AI语言模型开发公司。', icon: '/ai21.svg' },
      { name: 'Aleph Alpha', url: 'https://aleph-alpha.com', description: '欧洲AI研究公司，开发多语言模型。', icon: '/aleph.svg' }
    ]
  },
  {
    name: 'AI创作工具',
    sites: [
      { name: 'Midjourney', url: 'https://www.midjourney.com', description: '强大的AI图像生成工具，可以创建高质量的艺术作品。', icon: '/midjourney.svg' },
      { name: 'DALL-E', url: 'https://openai.com/dall-e-3', description: 'OpenAI开发的AI图像生成工具，支持多种风格。', icon: '/dalle.svg' },
      { name: 'Stable Diffusion', url: 'https://stablediffusionweb.com', description: '开源的AI图像生成模型，支持本地部署。', icon: '/stablediffusion.svg' },
      { name: 'Leonardo.AI', url: 'https://leonardo.ai', description: 'AI艺术创作平台，支持多种艺术风格。', icon: '/leonardo.svg' },
      { name: 'Runway', url: 'https://runwayml.com', description: 'AI视频创作工具，支持视频编辑和特效。', icon: '/runway.svg' },
      { name: 'Canva AI', url: 'https://www.canva.com/ai-tools', description: 'AI设计工具，帮助用户快速创建专业设计。', icon: '/canva.svg' },
      { name: 'Adobe Firefly', url: 'https://www.adobe.com/sensei/generative-ai/firefly.html', description: 'Adobe开发的AI创意工具套件。', icon: '/adobe.svg' },
      { name: 'Bing Image Creator', url: 'https://www.bing.com/create', description: '微软开发的AI图像生成工具。', icon: '/bing.svg' },
      { name: 'DreamStudio', url: 'https://dreamstudio.ai', description: 'Stability AI的图像生成平台。', icon: '/dreamstudio.svg' },
      { name: 'Artbreeder', url: 'https://www.artbreeder.com', description: 'AI艺术创作和混合平台。', icon: '/artbreeder.svg' },
      { name: 'NightCafe', url: 'https://nightcafe.studio', description: 'AI艺术生成平台，支持多种艺术风格。', icon: '/nightcafe.svg' },
      { name: 'Deep Dream Generator', url: 'https://deepdreamgenerator.com', description: '神经网络艺术生成器，创造独特的视觉效果。', icon: '/deepdream.svg' },
      { name: 'Craiyon', url: 'https://www.craiyon.com', description: '免费的AI图像生成工具，简单易用。', icon: '/craiyon.svg' },
      { name: 'Playground AI', url: 'https://playground.ai', description: 'AI图像创作平台，支持多种模型。', icon: '/playground.svg' },
      { name: 'Lexica', url: 'https://lexica.art', description: 'AI艺术搜索和生成平台。', icon: '/lexica.svg' },
      { name: 'Stable Art', url: 'https://stableart.ai', description: '基于Stable Diffusion的艺术生成平台。', icon: '/stableart.svg' },
      { name: 'Dream by WOMBO', url: 'https://dream.ai', description: 'AI艺术创作工具，支持多种风格。', icon: '/wombo.svg' },
      { name: 'Fotor AI', url: 'https://www.fotor.com/features/ai-image-generator', description: 'AI图像生成和编辑工具。', icon: '/fotor.svg' },
      { name: 'Picsart AI', url: 'https://picsart.com/ai', description: 'AI照片编辑和生成工具。', icon: '/picsart.svg' },
      { name: 'PhotoRoom', url: 'https://www.photoroom.com', description: 'AI背景移除和编辑工具。', icon: '/photoroom.svg' }
    ]
  },
  {
    name: 'AI办公助手',
    sites: [
      { name: 'Notion AI', url: 'https://www.notion.so/product/ai', description: 'Notion的AI助手，帮助写作、总结和头脑风暴。', icon: '/notion.svg' },
      { name: 'Grammarly', url: 'https://www.grammarly.com', description: 'AI写作助手，帮助检查和改进写作。', icon: '/grammarly.svg' },
      { name: 'Jasper', url: 'https://www.jasper.ai', description: 'AI内容创作平台，支持多种写作场景。', icon: '/jasper.svg' },
      { name: 'Copy.ai', url: 'https://www.copy.ai', description: 'AI文案创作工具，帮助生成营销内容。', icon: '/copyai.svg' },
      { name: 'Writesonic', url: 'https://writesonic.com', description: 'AI内容创作平台，支持多种写作需求。', icon: '/writesonic.svg' },
      { name: 'Rytr', url: 'https://rytr.me', description: 'AI写作助手，支持多种写作风格。', icon: '/rytr.svg' },
      { name: 'Wordtune', url: 'https://www.wordtune.com', description: 'AI写作助手，帮助改进写作表达。', icon: '/wordtune.svg' },
      { name: 'Quillbot', url: 'https://quillbot.com', description: 'AI改写工具，帮助优化文本表达。', icon: '/quillbot.svg' },
      { name: 'Sudowrite', url: 'https://www.sudowrite.com', description: 'AI小说写作助手。', icon: '/sudowrite.svg' },
      { name: 'HyperWrite', url: 'https://hyperwrite.ai', description: 'AI写作助手，支持多种写作场景。', icon: '/hyperwrite.svg' },
      { name: 'Writer', url: 'https://writer.com', description: '企业级AI写作平台，支持团队协作。', icon: '/writer.svg' },
      { name: 'Anyword', url: 'https://anyword.com', description: 'AI文案创作工具，优化营销内容。', icon: '/anyword.svg' },
      { name: 'Peppertype', url: 'https://www.peppertype.ai', description: 'AI内容创作平台，支持多种场景。', icon: '/peppertype.svg' },
      { name: 'Simplified', url: 'https://simplified.com', description: 'AI内容创作和设计平台。', icon: '/simplified.svg' },
      { name: 'ContentBot', url: 'https://contentbot.ai', description: 'AI内容生成工具，支持多种格式。', icon: '/contentbot.svg' },
      { name: 'CopySmith', url: 'https://copysmith.ai', description: 'AI文案创作工具，专注于营销内容。', icon: '/copysmith.svg' },
      { name: 'Kafkai', url: 'https://kafkai.com', description: 'AI文章生成工具，支持多种主题。', icon: '/kafkai.svg' },
      { name: 'Article Forge', url: 'https://www.articleforge.com', description: 'AI文章写作工具，自动生成内容。', icon: '/articleforge.svg' },
      { name: 'INK', url: 'https://inkforall.com', description: 'AI内容优化工具，提升SEO效果。', icon: '/ink.svg' },
      { name: 'Scalenut', url: 'https://www.scalenut.com', description: 'AI内容创作平台，支持多种需求。', icon: '/scalenut.svg' }
    ]
  },
  {
    name: 'AI编程工具',
    sites: [
      { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', description: 'AI编程助手，帮助编写和优化代码。', icon: '/copilot.svg' },
      { name: 'Cursor', url: 'https://cursor.sh', description: 'AI驱动的代码编辑器，支持智能补全和对话。', icon: '/cursor.svg' },
      { name: 'Codeium', url: 'https://codeium.com', description: 'AI代码补全工具，支持多种编程语言。', icon: '/codeium.svg' },
      { name: 'Tabnine', url: 'https://www.tabnine.com', description: 'AI代码补全工具，支持多种IDE。', icon: '/tabnine.svg' },
      { name: 'Replit', url: 'https://replit.com', description: 'AI驱动的在线编程平台。', icon: '/replit.svg' },
      { name: 'Phind', url: 'https://www.phind.com', description: 'AI编程搜索引擎，帮助解决编程问题。', icon: '/phind.svg' },
      { name: 'Sourcegraph Cody', url: 'https://sourcegraph.com/cody', description: 'AI编程助手，支持代码理解和生成。', icon: '/sourcegraph.svg' },
      { name: 'Amazon CodeWhisperer', url: 'https://aws.amazon.com/codewhisperer', description: 'AWS的AI编程助手。', icon: '/aws.svg' },
      { name: 'JetBrains AI', url: 'https://www.jetbrains.com/ai', description: 'JetBrains IDE的AI助手。', icon: '/jetbrains.svg' },
      { name: 'CodeT5', url: 'https://github.com/salesforce/CodeT5', description: '开源的AI代码生成模型。', icon: '/codet5.svg' },
      { name: 'Codex', url: 'https://openai.com/blog/openai-codex', description: 'OpenAI的代码生成模型。', icon: '/openai.svg' },
      { name: 'Code Llama', url: 'https://ai.meta.com/llama/code-llama', description: 'Meta的代码生成模型。', icon: '/meta.svg' },
      { name: 'StarCoder', url: 'https://huggingface.co/bigcode/starcoder', description: '开源的代码生成模型。', icon: '/starcoder.svg' },
      { name: 'CodeGeeX', url: 'https://codegeex.cn', description: '多语言代码生成工具。', icon: '/codegeex.svg' },
      { name: 'CodeT5+', url: 'https://github.com/salesforce/CodeT5', description: '高级代码生成模型。', icon: '/codet5.svg' },
      { name: 'PolyCoder', url: 'https://github.com/VHellendoorn/Code-LMs', description: '开源的代码生成模型。', icon: '/polycoder.svg' },
      { name: 'CodeParrot', url: 'https://huggingface.co/codeparrot', description: 'Python代码生成模型。', icon: '/codeparrot.svg' },
      { name: 'CodeGen', url: 'https://github.com/salesforce/CodeGen', description: '程序合成工具。', icon: '/codegen.svg' },
      { name: 'InCoder', url: 'https://huggingface.co/facebook/incoder', description: '代码填充工具。', icon: '/incoder.svg' },
      { name: 'SantaCoder', url: 'https://huggingface.co/bigcode/santacoder', description: '小型代码生成模型。', icon: '/santacoder.svg' }
    ]
  },
  {
    name: 'AI视频工具',
    sites: [
      { name: 'Runway', url: 'https://runwayml.com', description: 'AI视频创作和编辑平台。', icon: '/runway.svg' },
      { name: 'Synthesia', url: 'https://www.synthesia.io', description: 'AI视频生成平台，支持数字人视频。', icon: '/synthesia.svg' },
      { name: 'HeyGen', url: 'https://www.heygen.com', description: 'AI视频生成平台，支持数字人视频。', icon: '/heygen.svg' },
      { name: 'D-ID', url: 'https://www.d-id.com', description: 'AI视频生成平台，支持数字人视频。', icon: '/did.svg' },
      { name: 'Pictory', url: 'https://pictory.ai', description: 'AI视频创作平台，支持文本转视频。', icon: '/pictory.svg' },
      { name: 'InVideo', url: 'https://invideo.io', description: 'AI视频创作平台，支持多种视频模板。', icon: '/invideo.svg' },
      { name: 'Lumen5', url: 'https://lumen5.com', description: 'AI视频创作平台，支持文本转视频。', icon: '/lumen5.svg' },
      { name: 'Synthesys', url: 'https://synthesys.io', description: 'AI视频和语音生成平台。', icon: '/synthesys.svg' },
      { name: 'Elai', url: 'https://elai.io', description: 'AI视频生成平台，支持数字人视频。', icon: '/elai.svg' },
      { name: 'Colossyan', url: 'https://www.colossyan.com', description: 'AI视频生成平台，支持数字人视频。', icon: '/colossyan.svg' },
      { name: 'DeepBrain AI', url: 'https://www.deepbrain.io', description: 'AI视频生成平台，支持数字人视频。', icon: '/deepbrain.svg' },
      { name: 'Rephrase.ai', url: 'https://www.rephrase.ai', description: 'AI视频创作平台，支持数字人视频。', icon: '/rephrase.svg' },
      { name: 'Veed.io', url: 'https://www.veed.io', description: 'AI视频编辑平台，支持多种特效。', icon: '/veed.svg' },
      { name: 'Descript', url: 'https://www.descript.com', description: 'AI视频编辑平台，支持语音转文字。', icon: '/descript.svg' },
      { name: 'Kapwing', url: 'https://www.kapwing.com', description: 'AI视频创作工具，支持多种功能。', icon: '/kapwing.svg' },
      { name: 'Fliki', url: 'https://fliki.ai', description: 'AI视频创作平台，支持文本转视频。', icon: '/fliki.svg' },
      { name: 'Wondershare Filmora', url: 'https://filmora.wondershare.com', description: 'AI视频编辑软件，支持多种特效。', icon: '/filmora.svg' },
      { name: 'Adobe Premiere Pro', url: 'https://www.adobe.com/products/premiere.html', description: 'AI视频编辑软件，专业级功能。', icon: '/adobe.svg' },
      { name: 'Final Cut Pro', url: 'https://www.apple.com/final-cut-pro', description: 'AI视频编辑软件，支持多种特效。', icon: '/apple.svg' },
      { name: 'DaVinci Resolve', url: 'https://www.blackmagicdesign.com/products/davinciresolve', description: 'AI视频编辑软件，专业级功能。', icon: '/davinci.svg' }
    ]
  },
  {
    name: 'AI音频工具',
    sites: [
      { name: 'ElevenLabs', url: 'https://elevenlabs.io', description: 'AI语音合成平台，支持多种语言和声音。', icon: '/elevenlabs.svg' },
      { name: 'Murf', url: 'https://murf.ai', description: 'AI语音生成平台，支持多种语言和声音。', icon: '/murf.svg' },
      { name: 'Descript', url: 'https://www.descript.com', description: 'AI音频编辑平台，支持语音转文字和编辑。', icon: '/descript.svg' },
      { name: 'Synthesia', url: 'https://www.synthesia.io', description: 'AI视频和语音生成平台。', icon: '/synthesia.svg' },
      { name: 'Resemble AI', url: 'https://www.resemble.ai', description: 'AI语音克隆平台，支持自定义声音。', icon: '/resemble.svg' },
      { name: 'Play.ht', url: 'https://play.ht', description: 'AI语音生成平台，支持多种语言和声音。', icon: '/playht.svg' },
      { name: 'Lovo', url: 'https://lovo.ai', description: 'AI语音生成平台，支持多种语言和声音。', icon: '/lovo.svg' },
      { name: 'WellSaid Labs', url: 'https://wellsaidlabs.com', description: 'AI语音合成平台，支持高质量语音。', icon: '/wellsaid.svg' },
      { name: 'Speechify', url: 'https://speechify.com', description: 'AI文本转语音平台，支持多种语言。', icon: '/speechify.svg' },
      { name: 'Amazon Polly', url: 'https://aws.amazon.com/polly', description: 'AWS的AI语音合成服务。', icon: '/aws.svg' },
      { name: 'Google Cloud TTS', url: 'https://cloud.google.com/text-to-speech', description: 'Google的文本转语音服务。', icon: '/google.svg' },
      { name: 'Microsoft Azure TTS', url: 'https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech', description: 'Azure的文本转语音服务。', icon: '/microsoft.svg' },
      { name: 'IBM Watson TTS', url: 'https://www.ibm.com/cloud/watson-text-to-speech', description: 'IBM的文本转语音服务。', icon: '/ibm.svg' },
      { name: 'Coqui TTS', url: 'https://github.com/coqui-ai/TTS', description: '开源的文本转语音工具。', icon: '/coqui.svg' },
      { name: 'Tortoise TTS', url: 'https://github.com/neonbjb/tortoise-tts', description: '开源的文本转语音工具。', icon: '/tortoise.svg' },
      { name: 'VALL-E', url: 'https://valle-demo.github.io', description: '神经文本转语音工具。', icon: '/valle.svg' },
      { name: 'Bark', url: 'https://github.com/suno-ai/bark', description: '文本转音频工具。', icon: '/bark.svg' },
      { name: 'Whisper', url: 'https://github.com/openai/whisper', description: '语音识别工具。', icon: '/openai.svg' },
      { name: 'AssemblyAI', url: 'https://www.assemblyai.com', description: '语音AI平台。', icon: '/assemblyai.svg' },
      { name: 'Rev AI', url: 'https://www.rev.ai', description: '语音识别服务。', icon: '/rev.svg' }
    ]
  },
  {
    name: 'AI学习工具',
    sites: [
      { name: 'Khanmigo', url: 'https://www.khanacademy.org/khan-labs', description: '可汗学院的AI学习助手。', icon: '/khan.svg' },
      { name: 'Duolingo Max', url: 'https://www.duolingo.com/max', description: 'Duolingo的AI语言学习功能。', icon: '/duolingo.svg' },
      { name: 'Quizlet', url: 'https://quizlet.com/features/ai', description: 'Quizlet的AI学习功能。', icon: '/quizlet.svg' },
      { name: 'Coursera', url: 'https://www.coursera.org', description: '在线学习平台，提供AI相关课程。', icon: '/coursera.svg' },
      { name: 'Udemy', url: 'https://www.udemy.com', description: '在线学习平台，提供AI相关课程。', icon: '/udemy.svg' },
      { name: 'DeepLearning.AI', url: 'https://www.deeplearning.ai', description: 'AI学习资源平台，提供专业课程。', icon: '/deeplearning.svg' },
      { name: 'Fast.ai', url: 'https://www.fast.ai', description: '实用深度学习课程平台。', icon: '/fastai.svg' },
      { name: 'Kaggle', url: 'https://www.kaggle.com', description: '数据科学和机器学习学习平台。', icon: '/kaggle.svg' },
      { name: 'DataCamp', url: 'https://www.datacamp.com', description: '数据科学学习平台。', icon: '/datacamp.svg' },
      { name: 'edX', url: 'https://www.edx.org', description: '在线学习平台，提供AI相关课程。', icon: '/edx.svg' },
      { name: 'Udacity', url: 'https://www.udacity.com', description: '技术教育平台，提供AI课程。', icon: '/udacity.svg' },
      { name: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu', description: 'MIT免费课程平台，包含AI课程。', icon: '/mit.svg' },
      { name: 'Stanford Online', url: 'https://online.stanford.edu', description: '斯坦福在线课程，包含AI课程。', icon: '/stanford.svg' },
      { name: 'Harvard Online', url: 'https://online-learning.harvard.edu', description: '哈佛在线课程，包含AI课程。', icon: '/harvard.svg' },
      { name: 'Google AI', url: 'https://ai.google/education', description: 'Google AI教育资源。', icon: '/google.svg' },
      { name: 'Microsoft Learn', url: 'https://learn.microsoft.com', description: 'Microsoft学习平台，包含AI课程。', icon: '/microsoft.svg' },
      { name: 'IBM Skills', url: 'https://www.ibm.com/training', description: 'IBM培训平台，包含AI课程。', icon: '/ibm.svg' },
      { name: 'NVIDIA DLI', url: 'https://www.nvidia.com/en-us/training', description: 'NVIDIA深度学习培训。', icon: '/nvidia.svg' },
      { name: 'TensorFlow', url: 'https://www.tensorflow.org/learn', description: 'TensorFlow学习资源。', icon: '/tensorflow.svg' },
      { name: 'PyTorch', url: 'https://pytorch.org/tutorials', description: 'PyTorch教程资源。', icon: '/pytorch.svg' }
    ]
  },
  {
    name: 'AI音乐工具',
    sites: [
      { name: 'Boomy', url: 'https://boomy.com', description: 'AI音乐创作平台，支持多种风格。', icon: '/boomy.svg' },
      { name: 'Soundraw', url: 'https://soundraw.io', description: 'AI音乐生成平台，支持多种风格。', icon: '/soundraw.svg' },
      { name: 'AIVA', url: 'https://www.aiva.ai', description: 'AI音乐创作平台，支持多种风格。', icon: '/aiva.svg' },
      { name: 'Amper Music', url: 'https://www.ampermusic.com', description: 'AI音乐创作平台，支持多种风格。', icon: '/amper.svg' },
      { name: 'Soundful', url: 'https://soundful.com', description: 'AI音乐生成平台，支持多种风格。', icon: '/soundful.svg' },
      { name: 'Mubert', url: 'https://mubert.com', description: 'AI音乐平台，支持多种风格。', icon: '/mubert.svg' },
      { name: 'Ecrett Music', url: 'https://ecrettmusic.com', description: 'AI音乐创作平台，支持多种风格。', icon: '/ecrett.svg' },
      { name: 'LALAL.AI', url: 'https://www.lalal.ai', description: 'AI音频分离工具。', icon: '/lalal.svg' },
      { name: 'Moises', url: 'https://moises.ai', description: 'AI音乐分离工具。', icon: '/moises.svg' },
      { name: 'Spleeter', url: 'https://github.com/deezer/spleeter', description: '开源的AI音频分离工具。', icon: '/spleeter.svg' },
      { name: 'iZotope RX', url: 'https://www.izotope.com/en/products/rx.html', description: 'AI音频修复工具。', icon: '/izotope.svg' },
      { name: 'LANDR', url: 'https://www.landr.com', description: 'AI音乐母带处理工具。', icon: '/landr.svg' },
      { name: 'Ozone', url: 'https://www.izotope.com/en/products/ozone.html', description: 'AI母带处理工具。', icon: '/ozone.svg' },
      { name: 'MasteringBOX', url: 'https://www.masteringbox.com', description: 'AI母带处理工具。', icon: '/masteringbox.svg' },
      { name: 'BandLab', url: 'https://www.bandlab.com', description: 'AI音乐创作平台。', icon: '/bandlab.svg' },
      { name: 'Splice', url: 'https://splice.com', description: 'AI音乐样本平台。', icon: '/splice.svg' },
      { name: 'Output', url: 'https://output.com', description: 'AI音乐工具平台。', icon: '/output.svg' },
      { name: 'Native Instruments', url: 'https://www.native-instruments.com', description: 'AI音乐制作工具。', icon: '/native.svg' },
      { name: 'Ableton Live', url: 'https://www.ableton.com', description: 'AI音乐制作软件。', icon: '/ableton.svg' },
      { name: 'FL Studio', url: 'https://www.image-line.com', description: 'AI音乐制作软件。', icon: '/flstudio.svg' }
    ]
  },
  {
    name: 'AI工具平台',
    sites: [
      { name: 'Hugging Face', url: 'https://huggingface.co', description: 'AI模型平台，提供多种模型。', icon: '/huggingface.svg' },
      { name: 'Replicate', url: 'https://replicate.com', description: 'AI模型部署平台。', icon: '/replicate.svg' },
      { name: 'LangChain', url: 'https://www.langchain.com', description: 'AI应用开发框架。', icon: '/langchain.svg' },
      { name: 'LlamaIndex', url: 'https://www.llamaindex.ai', description: 'AI数据索引工具。', icon: '/llamaindex.svg' },
      { name: 'AutoGPT', url: 'https://autogpt.net', description: 'AI自动化工具。', icon: '/autogpt.svg' },
      { name: 'AgentGPT', url: 'https://agentgpt.reworkd.ai', description: 'AI代理平台。', icon: '/agentgpt.svg' },
      { name: 'OpenAI API', url: 'https://platform.openai.com', description: 'OpenAI API平台。', icon: '/openai.svg' },
      { name: 'Anthropic API', url: 'https://console.anthropic.com', description: 'Anthropic API平台。', icon: '/anthropic.svg' },
      { name: 'Google AI Studio', url: 'https://makersuite.google.com', description: 'Google AI工具平台。', icon: '/google.svg' },
      { name: 'Microsoft Azure AI', url: 'https://azure.microsoft.com/en-us/services/cognitive-services', description: 'Azure AI服务平台。', icon: '/microsoft.svg' },
      { name: 'AWS AI Services', url: 'https://aws.amazon.com/ai', description: 'AWS AI服务平台。', icon: '/aws.svg' },
      { name: 'IBM Watson', url: 'https://www.ibm.com/watson', description: 'IBM AI平台。', icon: '/ibm.svg' },
      { name: 'TensorFlow', url: 'https://www.tensorflow.org', description: 'Google的机器学习框架。', icon: '/tensorflow.svg' },
      { name: 'PyTorch', url: 'https://pytorch.org', description: 'Facebook的机器学习框架。', icon: '/pytorch.svg' },
      { name: 'JAX', url: 'https://github.com/google/jax', description: 'Google的机器学习框架。', icon: '/jax.svg' },
      { name: 'ONNX', url: 'https://onnx.ai', description: '开放神经网络交换格式。', icon: '/onnx.svg' },
      { name: 'MLflow', url: 'https://mlflow.org', description: '机器学习生命周期平台。', icon: '/mlflow.svg' },
      { name: 'Weights & Biases', url: 'https://wandb.ai', description: '机器学习实验跟踪平台。', icon: '/wandb.svg' },
      { name: 'Comet ML', url: 'https://www.comet.com', description: '机器学习实验跟踪平台。', icon: '/comet.svg' },
      { name: 'Neptune', url: 'https://neptune.ai', description: '机器学习实验跟踪平台。', icon: '/neptune.svg' }
    ]
  }
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('name')

  const filteredCategories = categories.map(category => ({
    ...category,
    sites: category.sites
      .filter(site => 
        site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name)
        } else if (sortBy === 'popularity') {
          // 这里可以根据需要添加排序逻辑
          return 0
        }
        return 0
      })
  })).filter(category => category.sites.length > 0)

  // 生成结构化数据
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AI工具导航",
    "description": "一站式AI工具集合平台，目标是收录1000+优质AI工具，助您轻松找到最适合的AI助手！",
    "url": "https://your-domain.com",
    "applicationCategory": "ReferenceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "AI对话助手",
      "AI创作工具",
      "AI办公助手",
      "AI编程工具",
      "AI视频工具",
      "AI音频工具",
      "AI学习工具"
    ]
  }

  return (
    <>
      <Head>
        <title>AI工具导航 - 全网最全AI工具集合 | AI导航网</title>
        <meta name="description" content="AI工具导航网收录了全网最全的AI工具，包括ChatGPT、Claude、Gemini等AI对话助手，Midjourney、DALL-E等AI绘画工具，以及各类AI办公、AI编程、AI视频等工具。一站式解决您的AI需求！" />
        <meta name="keywords" content="AI工具,AI导航,AI网站,AI助手,AI绘画,AI办公,AI编程,ChatGPT,Claude,Gemini,Midjourney,DALL-E" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:title" content="AI工具导航 - 全网最全AI工具集合" />
        <meta property="og:description" content="一站式AI工具导航平台，收录全网最全AI工具，助您轻松找到最适合的AI助手！" />
        <meta property="og:image" content="https://your-domain.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://your-domain.com" />
        <meta property="twitter:title" content="AI工具导航 - 全网最全AI工具集合" />
        <meta property="twitter:description" content="一站式AI工具导航平台，收录全网最全AI工具，助您轻松找到最适合的AI助手！" />
        <meta property="twitter:image" content="https://your-domain.com/og-image.jpg" />
        
        {/* 其他meta标签 */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* 预加载关键资源 */}
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* 结构化数据 */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              全网最全AI工具导航
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              一站式AI工具集合平台，目标是收录1000+优质AI工具，助您轻松找到最适合的AI助手！
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">AI对话助手</h3>
                <p className="text-gray-600 dark:text-gray-300">ChatGPT、Claude、Gemini等顶尖AI对话模型，智能回答您的问题</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">AI创作工具</h3>
                <p className="text-gray-600 dark:text-gray-300">Midjourney、DALL-E等AI绘画工具，让创意无限延伸</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">AI办公助手</h3>
                <p className="text-gray-600 dark:text-gray-300">Notion AI、Copilot等办公工具，提升工作效率</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="搜索AI工具..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                />
                <div className="absolute right-3 top-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              >
                <option value="name">按名称排序</option>
                <option value="popularity">按热度排序</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="sticky top-4 space-y-2">
                {filteredCategories.map((category) => (
                  <motion.button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeCategory === category.name
                        ? 'bg-blue-500 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCategories
                  .find((cat) => cat.name === activeCategory)
                  ?.sites.map((site) => (
                    <motion.a
                      key={site.name}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center mb-3">
                        {/* <img src={site.icon} alt={site.name} className="w-8 h-8 mr-3" /> */}
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {site.name}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {site.description}
                      </p>
                    </motion.a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 