import { BlogArticle } from "../types/blog";

export const ALL_BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "logistic-regression",
    slug: "logistic-regression",
    title:
      "Accelerated Logistic Regression Through an Inertia-Increased Stochastic Optimization Method",
    date: "January 30, 2025",
    author: "Iheb Gafsi",
    category: "ml",
    image: "/blogs/images/logistic-regression/accelerated-logistic-banner.jpg",
    description:
      "This research introduces Adamu, a novel optimization algorithm designed to improve the performance of Logistic Regression models. Adamu extends Adam's capabilities by addressing issues like slow convergence and local minima, achieving faster and more reliable optimization in high-dimensional and noisy landscapes.",
    readTime: 3,
    sections: [
      {
        type: "paragraph",
        content:
          "This research introduces Adamu, a novel optimization algorithm designed to improve the performance of Logistic Regression models. Adamu extends Adam's capabilities by addressing issues like slow convergence and local minima, achieving faster and more reliable optimization in high-dimensional and noisy landscapes.",
      },
      {
        type: "heading",
        title: "Key Highlights",
      },
      {
        type: "list",
        items: [
          "Challenges Addressed:",
          "Slow convergence and stagnation in local minima by conventional methods like SGD and Adam.",
          "Inadequate handling of sparse gradients and noisy optimization landscapes.",
          "Proposed Solution:",
          "Adamu introduces an inertia-based update mechanism and bias correction for more stable and adaptive optimization.",
          "It outperforms state-of-the-art methods with 2x faster convergence and 100x higher accuracy.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Experimental Results: Performance comparison of Adamu against baseline models in terms of time to target and accuracy",
      },
      {
        type: "image",
        image: {
          src: "/blogs/images/logistic-regression/research1-ss1.png",
          alt: "models comparison",
        },
      },
      {
        type: "paragraph",
        content:
          "● Model Fitting: Adamu provided a near-perfect fit to the data, significantly outperforming SGD..",
      },
      {
        type: "image",
        image: {
          src: "/blogs/images/logistic-regression/research1-ss2.png",
          alt: "Description of the image",
        },
      },
    ],
    conclusion:
      "Conclusion: Adamu's improved convergence speed and accuracy make it a robust tool for solving complex optimization problems. It holds potential for broader applications in machine learning and high-dimensional data analysis.",
    pdf: {
      url: "blogs/pdf/Accelerated Logistic Regression.pdf",
      filename: "Accelerated Logistic Regression.pdf",
    },
  },
  {
    id: "llm-hallucinations",
    slug: "llm-hallucinations",
    title:
      "Understanding and Mitigating Hallucinations in Large Language Models",
    date: "February 5, 2025",
    author: "Fedy Ben Hassouna",
    category: "genai",
    image: "/blogs/images/hallucinations/hallucination-banner.jpg",
    description:
      'Large Language Models (LLMs), like GPT-4 and Bard, have revolutionized AI, offering human-like text generation for various applications. However, they are prone to "hallucinations," where outputs appear coherent but are factually inaccurate or illogical.',
    readTime: 4,
    sections: [
      {
        type: "paragraph",
        content:
          'Large Language Models (LLMs), like GPT-4 and Bard, have revolutionized AI, offering human-like text generation for various applications. However, they are prone to "hallucinations," where outputs appear coherent but are factually inaccurate or illogical. This issue poses risks, especially in fields like healthcare, law, and education.',
      },
      {
        type: "heading",
        title: "Causes of Hallucinations:",
      },
      {
        type: "list",
        items: [
          "Training Data Gaps:Incomplete, outdated, or biased datasets lead to fabricated or incorrect responses.",
        ],
      },
      {
        type: "paragraph",
        content:
          "The figure below demonstrates how biased datasets affect model performance.",
      },
      {
        type: "image",
        image: {
          src: "/blogs/images/hallucinations/research2-ss.png",
          alt: "Validation Loss Comparison",
        },
      },
      {
        type: "list",
        items: [
          "Over-Optimization for Coherence: Models prioritize fluency over accuracy, generating plausible yet incorrect outputs.",
          "Lack of Grounding in Real-World Knowledge: Without mechanisms to verify facts, models often produce misleading content.",
        ],
      },
      {
        type: "heading",
        title: "Solutions:",
      },
      {
        type: "list",
        items: [
          "Improving Training Data: Use diverse, up-to-date, and unbiased datasets to enhance model reliability.",
          "Fact-Checking Mechanisms: Integrate real-time verification tools like Wikipedia or Wolfram Alpha.",
        ],
      },
      {
        type: "paragraph",
        content:
          "The figure below illustrates a mechanism for verifying information in real time.",
      },
      {
        type: "image",
        image: {
          src: "/blogs/images/hallucinations/research2-ss2.png",
          alt: "Fact-Checking Process",
        },
      },
      {
        type: "list",
        items: [
          "Uncertainty Estimation: Allow models to express uncertainty, enhancing transparency and trust.",
        ],
      },
      {
        type: "heading",
        title: "Future Directions:",
      },
      {
        type: "list",
        items: [
          "Explore retrieval-augmented generation, combining LLMs with verified databases.",
          "Develop standardized benchmarks to assess and compare hallucination rates.",
          "Promote ethical AI practices to prioritize accuracy in critical applications.",
        ],
      },
    ],
    pdf: {
      url: "blogs/pdf/Hallucinations in LLMS.pdf",
      filename: "Hallucinations in LLMS.pdf",
    },
  },
  {
    id: "embedded-ai",
    slug: "embedded-ai",
    title: "Embedded AI: Increasing the Intelligence of Devices",
    date: "February 13, 2025",
    author: "Yassin Ben Faiza",
    category: "ml",
    image: "/blogs/images/embedded-ai/embedded-ai-banner.jpg",
    description:
      "Embedded AI (EAI) is transforming how devices process information by enabling real-time decision-making without relying on cloud computing. This technology is revolutionizing industries such as healthcare, automotive, industrial automation, and security, providing faster, more efficient, and privacy-focused AI solutions.",
    readTime: 5,
    sections: [
      {
        type: "paragraph",
        content:
          "Embedded AI (EAI) is transforming how devices process information by enabling real-time decision-making without relying on cloud computing. This technology is revolutionizing industries such as healthcare, automotive, industrial automation, and security, providing faster, more efficient, and privacy-focused AI solutions.",
      },
      {
        type: "heading",
        content: "Key Insights from the Research:",
      },
      {
        type: "list",
        items: ["What is Embedded AI?"],
      },
      {
        type: "paragraph",
        content:
          "EAI integrates AI models into edge devices, reducing latency, improving security, and allowing real-time processing. Devices like smartwatches, medical monitoring patches, and autonomous vehicles use EAI for instant decision-making.",
      },
      {
        type: "list",
        items: ["Real-World Applications:"],
      },
      {
        type: "image",
        image: {
          src: "/blogs/images/embedded-ai/research3-ss1.png",
          alt: "Validation Loss Comparison",
        },
      },
      {
        type: "paragraph",
        content:
          "Healthcare & Wearables: AI-powered devices track heart rate, oxygen levels, and detect medical anomalies.",
      },
      {
        type: "image",
        image: {
          src: "/blogs/images/embedded-ai/research3-ss3.png",
          alt: "Validation Loss Comparison",
        },
      },
      {
        type: "paragraph",
        content:
          "Self-Driving Cars: AI processes data from cameras and sensors to enhance driving safety. Industrial Automation: Factories use predictive maintenance and AI-driven quality control. Security & Surveillance: AI enables real-time motion detection and facial recognition.",
      },
      {
        type: "list",
        items: ["Challenges & Future Trends:"],
      },
      {
        type: "paragraph",
        content:
          "While hardware limitations, power consumption, and data security remain challenges, advancements in TinyML, low-power AI chips, and 5G are pushing Embedded AI forward. Engineering students and tech enthusiasts must stay ahead by mastering these innovations.",
      },
    ],
    pdf: {
      url: "blogs/pdf/Embedded AI.pdf",
      filename: "Embedded AI.pdf",
    },
  },
  {
    id: "alphageometry",
    slug: "alphageometry",
    title:
      "AlphaGeometry: AI Now Solves Geometry Problems Like a Math Gold-Medalist",
    date: "February 2, 2024",
    author: "Iheb Gafsi",
    category: "deepmind",
    image: "/blogs/images/alphageometry/alphageometry.png",
    description:
      "Google DeepMind's AlphaGeometry has made waves in the world of AI, achieving a remarkable feat: solving geometry problems at the level of an International Mathematical Olympiad (IMO) gold medalist.",
    readTime: 4,
    sections: [
      {
        type: "paragraph",
        content:
          "Google DeepMind's AlphaGeometry has made waves in the world of AI, achieving a remarkable feat: solving geometry problems at the level of an International Mathematical Olympiad (IMO) gold medalist. This accomplishment is particularly impressive considering the complexity and multifaceted nature of IMO geometry problems, demanding both visual and intricate mathematical reasoning abilities.",
      },
      {
        type: "paragraph",
        content:
          "The secret behind AlphaGeometry's success lies in its innovative pairing of two distinct AI architectures: a neural language model and a symbolic deduction engine. The neural language model acts as a creative spark, rapidly generating potential solutions and geometric constructs that might be relevant to the problem at hand. However, it lacks the rigor and detailed reasoning necessary to guarantee the validity of these suggestions. This is where the symbolic deduction engine steps in. Grounded in formal logic and established rules, it methodically analyzes these proposed solutions, carefully verifying them through logical reasoning and step-by-step deductions. This dynamic duo allows AlphaGeometry to navigate the intricacies of geometric theorems with a balance of speed and precision, effectively combining the strengths of both intuitive leaps and methodical analysis.",
      },
      {
        type: "paragraph",
        content:
          "AlphaGeometry's prowess has been demonstrably showcased in various tests. When pitted against other AI solvers, including search-based methods, it emerged as the undisputed champion. In a benchmark test involving a set of challenging geometry problems, AlphaGeometry tackled a remarkable 25 problems, significantly surpassing the previous best of 10 and even outperforming a strong competitor that combined algebraic reasoning with human-crafted strategies. Notably, it achieved this feat while utilizing fewer computational resources, highlighting its efficiency. This impressive performance can be attributed to the potent combination of its core symbolic deduction engine, an advanced algebraic deduction component, and the insightful contributions of the language model. While the algebraic component alone solved 14 problems, the language model's ability to identify auxiliary constructions unlocked solutions for an additional 11, propelling AlphaGeometry to its top position.",
      },
      {
        type: "paragraph",
        content:
          "Furthermore, AlphaGeometry's robustness shines even under resource constraints. Even with limited training data or reduced search budgets, it maintained its state-of-the-art performance, solving a remarkable 21 problems in both scenarios. In an expanded test set encompassing 231 geometry problems, its dominance continued, successfully tackling a staggering 98.7% of them, marking a significant leap compared to the capabilities of other methods. Beyond impressive problem-solving volume, AlphaGeometry even tackled notoriously challenging problems, including those from the 2000 and 2015 IMO, considered difficult even for seasoned human contestants. In a particularly noteworthy instance, its analysis of a 2004 IMO problem led to the discovery of a more general version of the theorem, showcasing its deep understanding of geometry and its ability to approach problems with innovative solutions.",
      },
      {
        type: "paragraph",
        content:
          "While AlphaGeometry has limitations, such as its tendency to rely on a more basic toolkit for proving theorems compared to human methods, its achievements represent a significant milestone in the field of AI. Its success in tackling complex mathematical problems previously considered outside the grasp of machines opens doors to exciting possibilities for the future, paving the way for further advancements in AI's problem-solving capabilities and its potential to contribute to diverse fields beyond mathematics.",
      },
    ],
  },
  {
    id: "sora-democratization",
    slug: "sora-democratization",
    title:
      "The Democratization of Filmmaking: Anyone Can Be a Director with Sora AI",
    date: "February 16, 2024",
    author: "Iheb Gafsi",
    category: "genai",
    image: "/blogs/images/sora-democratization/sora.png",
    description:
      'Enter Sora, OpenAI\'s revolutionary AI model that transforms mere text prompts into mind-bending videos. Imagine conjuring up scenes as vivid as "A man walks on the moon with a dog" simply by typing those words.',
    readTime: 4,
    sections: [
      {
        type: "paragraph",
        content:
          'Remember the days when creating a video required expensive equipment, technical know-how, and hours of editing? Well, prepare to be amazed! Enter Sora, OpenAI\'s revolutionary AI model that transforms mere text prompts into mind-bending videos. Imagine conjuring up scenes as vivid as "A man walks on the moon with a dog" simply by typing those words. Sora makes this fantasy a reality, weaving narratives through pixels with stunning detail, dynamic camera movements, and characters alive with emotion.',
      },
      {
        type: "paragraph",
        content:
          'Forget limitations. Sora\'s repertoire extends far beyond basic motion pictures. It can craft entire minute-long videos, complete with complex interactions between multiple characters. Craving a specific aesthetic? Describe a "stylish woman walking down a Tokyo street," and Sora will paint a vibrant canvas of glowing neon and pulsating city signs. Need to breathe life into existing footage? Sora seamlessly extends your video with original material, bridging the gap between imagination and reality.',
      },
      {
        type: "paragraph",
        content:
          "But how does this magic work? It all starts with your creativity. Feed Sora a descriptive prompt, and it taps into its vast knowledge base of videos, meticulously piecing together a visual interpretation. Think of it as a master storyteller wielding the power of motion pictures, translating your words into a captivating visual language.",
      },
      {
        type: "paragraph",
        content:
          "Sora's potential is as vast as human imagination itself. From visualizing scientific concepts to creating personalized entertainment experiences, the possibilities are endless. This is just the beginning of a new era where anyone can become a video director, simply by harnessing the power of words and AI. So, unleash your inner storyteller and prepare to be amazed by the worlds that Sora brings to life.",
      },
    ],
  },
  {
    id: "optimizing-model-performance",
    slug: "optimizing-model-performance",
    title:
      "Optimizing Model Performance: A Deep Dive into Overfitting and Underfitting Mitigation Techniques",
    date: "January 19, 2024",
    author: "Mahdi Jouadi",
    category: "ml",
    image: "/blogs/images/optimizing-model-performance/overunderfitting.jpg",
    description:
      "In machine learning, finding the right balance between simplicity and complexity is an art and a challenge in creating a model that performs well on unseen cases. Overfitting occurs when the model is too complex, while underfitting happens when it is too simple.",
    readTime: 3,
    sections: [
      {
        type: "paragraph",
        content:
          "In machine learning, finding the right balance between simplicity and complexity is an art and a challenge in creating a model that performs well on unseen cases. Overfitting in machine learning occurs when the model performs well during the training process but performs poorly on unseen data. It happens when the model is too complex and captures noise or random fluctuations in the training data. As you might have guessed, underfitting is the opposite and occurs when the model is too simple to capture the underlying patterns.",
      },
      {
        type: "paragraph",
        content:
          "In the pursuit of finding the perfect model, we follow these steps. To prevent overfitting, we can use regularization techniques to impose constraints on the model, discouraging it from fitting noise in the training data. L1 and L2 regularization and dropout are some techniques to prevent the model from overfitting.",
      },
      {
        type: "paragraph",
        content:
          "On the other side, to address underfitting issues, we can select a more complex model with more parameters, feed it better features, and reduce constraints on the model. Cross-validation is also a valuable tool to assess a model's generalization performance. By dividing the dataset into multiple subsets and training the model on different combinations of these subsets, this process helps identify if a model is overfitting or underfitting and guides adjustments to strike the optimal balance.",
      },
    ],
  },
  {
    id: "openai-jukebox",
    slug: "openai-jukebox",
    title: "OpenAI's Jukebox and AI Generated Music",
    date: "April 19, 2023",
    author: "Dali Selmi",
    category: "genai",
    image: "/blogs/images/openai-jukebox/openai_header.png",
    description:
      "Jukebox is a machine learning framework, developed by OpenAI, capable of generating music as raw audio in a range of genres and musical styles. Provided with a genre, artist, and lyrics as input, Jukebox outputs a new music sample produced from scratch.",
    readTime: 4,
    sections: [
      {
        type: "paragraph",
        content:
          "Jukebox is a machine learning framework, developed by OpenAI, capable of generating music as raw audio in a range of genres and musical styles. Provided with a genre, artist, and lyrics as input, Jukebox outputs a new music sample produced from scratch.",
      },
      {
        type: "heading",
        content: "Approach:",
      },
      {
        type: "paragraph",
        content:
          "Synthesizing songs at the audio level is difficult because of the length of the sequences: a typical 4-minute song at CD quality (44 kHz, 16-bit) contains over 10 million timesteps. As a result, mastering the high-level semantics of music necessitates models that can cope with extremely long-term dependencies.",
      },
      {
        type: "paragraph",
        content:
          "Jukebox tackles this by using what’s called an autoencoder, a type of neural network that compresses raw audio into a lower-dimensional space by getting rid of unnecessary information. The model then learns how to produce new music in this compressed area, which it then upsampled back to the original raw audio space.",
      },
      {
        type: "paragraph",
        content:
          'Jukebox employs a form of autoencoder known as Vector Quantized Variational AutoEncoder (VQ-VAE). This model compresses raw audio 8 times, 32 times, and 128 times. The bottom-level encoding (8 times) yields the best reconstruction in the form of "music codes," but the top-level encoding (128 times) maintains just the most important musical information, such as pitch, timbre, and volume.',
      },
      {
        type: "paragraph",
        content:
          "Jukebox employs a range of prior models to produce music in the compressed space. These models learn the distribution of music codes and use them to make music. Because the top-level prior reflects the long-term structure of music, samples decoded from it have inferior audio quality but capture high-level semantics such as singing and melodies. The middle and bottom upsampling priors increase audio quality by adding local musical structures such as timbre.",
      },
      {
        type: "paragraph",
        content:
          "In brief, Jukebox compresses raw audio with an autoencoder into a lower-dimensional space, learns to make music in this area, and then upsamples it back to the raw audio space. It compresses audio at various levels with VQ-VAE and generates music in the compressed space with a series of earlier models.",
      },
      {
        type: "paragraph",
        content:
          "To train the model, OpenAI scraped the web to curate a dataset of 1.2 million songs (600,000 of which are in English), paired with the corresponding lyrics and metadata from LyricWiki. The metadata includes artist, album genre, and year of the songs, along with common moods or playlist keywords associated with each song. The developing team trained the model on 32-bit, 44.1 kHz raw audio and performed data augmentation (techniques used to artificially increase the size of a dataset by applying various transformations to the existing data in order to improve model performance and prevent overfitting.) by randomly downmixing the right and left channels to produce mono audio.",
      },
      {
        type: "heading",
        content: "Limitations and challenges:",
      },
      {
        type: "paragraph",
        content:
          "OpenAI's researchers have achieved substantial success in developing the Jukebox model, which represents a major advance in terms of the quality, coherence, and duration of the created musical samples. Despite these advancements, there is still a significant difference between these machine-generated songs and those made by human artists.",
      },
      {
        type: "paragraph",
        content:
          "Although Jukebox may generate local musical coherence and follow standard chord patterns, broader musical structures like as choruses are typically missing. Furthermore, the downsampling and upsampling processes can create discernible noise, prompting the researchers to investigate ways for reducing this noise and improving the quality of the resulting music.",
      },
      {
        type: "paragraph",
        content:
          "To overcome these constraints, the OpenAI team is focusing on improving the Vector Quantized Variational AutoEncoder (VQ-VAE) model used by Jukebox in order to capture more musical information while minimizing noise during the downsampling and upsampling processes. They are also looking towards ways to accelerate the autoregressive nature of sampling, which currently limits Jukebox's use in interactive applications. One possible option is to convert the model into a parallel sampler, which might significantly accelerate the sampling process.",
      },
      {
        type: "paragraph",
        content:
          "Another critical area of effort for the OpenAI team is expanding the number of languages and musical genres supported by Jukebox. While the model is presently trained mostly on English lyrics and Western music, the researchers want to incorporate songs from other languages and regions of the world in the future.",
      },
      {
        type: "paragraph",
        content:
          "Despite the gap between machine-produced and human-made music, the dispute over intellectual property rights and ownership of generated music continues. While Jukebox was supposed to produce original music that does not infringe on existing copyrights, concerns have been expressed about the technology's possible abuse. There are also concerns regarding who owns the music made by Jukebox and how these rights will be maintained and preserved.",
      },
      {
        type: "heading",
        content: "Conclusion:",
      },
      {
        type: "paragraph",
        content:
          "To sum up, OpenAI's Jukebox is an impressive tool for creating synthetic music in a variety of genres and musical styles. It compresses raw audio with an autoencoder into a lower-dimensional space and then learns to generate new music in this compressed space. The model was trained on a 1.2 million song dataset and shown considerable improvements in terms of the quality, coherence, and duration of the synthesized musical samples. However, there are still obstacles to solve, such as lowering noise during the downsampling and upsampling procedures, as well as increasing the number of supported languages and musical genres. There is also an ongoing discussion about intellectual property rights and ownership of created music. Overall, Jukebox marks a significant advancement in the realm of music creation, and it will be interesting to see how it evolves in the future.",
      },
    ],
  },
  {
    id: "midjourney-ai",
    slug: "midjourney-ai",
    title: "Midjourney AI: redefining art in the age of AI",
    date: "April 5, 2023",
    author: "Dali Selmi",
    category: "genai",
    image: "/blogs/images/midjourney-ai/header_midjourney.png",
    description:
      "Midjourney is an AI tool that takes a prompt from the user, which could be text or image input, and generates unique images in response. Developed and hosted in San Francisco, the one-year-old tool has become popular in various sectors.",
    readTime: 3,
    sections: [
      {
        type: "paragraph",
        content:
          "Midjourney is an AI tool that takes a prompt from the user, which could be text or image input, and generates unique images in response. Developed and hosted in San Francisco, the one-year-old tool has become popular in various sectors. In advertising, for instance, the quick adoption of this technology meant rapid creation of new ideas and brainstorming and opened the doors to new opportunities, including custom ads and a new way to create special effects.",
      },
      {
        type: "paragraph",
        content:
          "The AI tool is a black box for most of the users, as the team has kept quiet about its background and training. Still, in all likelihood, it is similar to that of Dall-E 2 and Stable Diffusion, the latter being open source. These models work by adding noise to an image and then learning to recover the data by reversing the noising process, trained on millions of images and text descriptions scraped from the internet.",
      },
      {
        type: "paragraph",
        content:
          'The dataset has been the subject of controversy as some artists publicly accused Midjourney of "devaluing original creative work". Although Midjourney’s policy allows artists to request the removal of their work from the training set, many of them filed a class-action lawsuit against the company last year. The copywrite infringement controversy aside, Midjourney faces yet another challenge: the lack of control over what the users are allowed to generate. This has become apparent with the launch of Midjourney v5, which pushes the boundaries of realism in synthetic pictures, and the lack of fake image detection tools doesn’t help their case, especially since the public is concerned about the tool being misused for propaganda or other harmful purposes.',
      },
      {
        type: "paragraph",
        content:
          "Taking everything into account, we are living in an important era for generative AI. As the technology advances, it is crucial companies working on these tools to demonstrate their commitment to creativity and the ethics of this new era of art.",
      },
    ],
  },
  {
    id: "metrics-in-ml",
    slug: "metrics-in-ml",
    title: "Metrics in ML problems",
    date: "April 8, 2023",
    author: "Dali Selmi",
    category: "ml",
    image: "/blogs/images/metrics-ml/metrics_header.jpg",
    description:
      "A comprehensive guide to understanding the various performance metrics used in machine learning for both classification and regression problems, including Accuracy, Precision, Recall, MSE, and more.",
    readTime: 4,
    sections: [
      {
        type: "heading",
        title: "Classification",
      },
      {
        type: "heading",
        title: "Accuracy",
      },
      {
        type: "paragraph",
        content:
          "Accuracy measures the percentage of correctly predicted labels in the test set. While it is a useful metric, it may not always be the best indicator of a model's performance, especially when the classes are imbalanced.",
      },
      {
        type: "heading",
        title: "Precision",
      },
      {
        type: "image",
        image: {
          src: "/blogs/images/metrics-ml/precision.JPG",
          alt: "Precision formula",
        },
      },
      {
        type: "paragraph",
        content:
          "Precision measures the percentage of true positives among all positive predictions. It is a useful metric when the goal is to minimize false positives.",
      },
      {
        type: "heading",
        title: "Recall",
      },
      {
        type: "image",
        image: {
          src: "/blogs/images/metrics-ml/recall.JPG",
          alt: "Recall formula",
        },
      },
      {
        type: "paragraph",
        content:
          "Recall measures the percentage of true positives among all actual positives. It is a useful metric when the goal is to minimize false negatives.",
      },
      {
        type: "heading",
        title: "F1 Score",
      },
      {
        type: "image",
        image: {
          src: "/blogs/images/metrics-ml/embedding_svm6.png",
          alt: "F1 formula",
        },
      },
      {
        type: "paragraph",
        content:
          "F1 Score is the harmonic mean of precision and recall. It is a useful metric when you want to balance the importance of precision and recall.",
      },
      {
        type: "heading",
        title: "Area Under the ROC Curve",
      },
      {
        type: "paragraph",
        content:
          "The ROC curve is a graphical representation of the trade-off between sensitivity and specificity. AUC measures the area under the ROC curve and is a useful metric when the goal is to balance sensitivity and specificity.",
      },
      {
        type: "heading",
        title: "Regression",
      },
      {
        type: "heading",
        title: "Mean Squared Error",
      },
      {
        type: "paragraph",
        content:
          "MSE measures the average squared difference between the predicted and actual values. It is a commonly used metric in regression problems.",
      },
      {
        type: "heading",
        title: "Root Mean Squared Error",
      },
      {
        type: "image",
        image: {
          src: "/blogs/images/metrics-ml/RMSE-1.jpg",
          alt: "rmse formula",
        },
      },
      {
        type: "paragraph",
        content:
          "RMSE is the square root of MSE and measures the average difference between the predicted and actual values. It is a useful metric when you want to express the error in the same units as the target variable.",
      },
      {
        type: "heading",
        title: "Mean Absolute Error",
      },
      {
        type: "image",
        image: {
          src: "/blogs/images/metrics-ml/mae.jpeg",
          alt: "MAE Formula",
        },
      },
      {
        type: "paragraph",
        content:
          "MAE measures the average absolute difference between the predicted and actual values. It is a useful metric when you want to avoid the influence of outliers.",
      },
    ],
  },
  {
    id: "mamba-revolutionizing-ai",
    slug: "mamba-revolutionizing-ai",
    title: "Smarter, Faster, Stronger: How Mamba is Revolutionizing AI",
    date: "February 9, 2024",
    author: "Iheb Gafsi",
    category: "genai",
    image: "/blogs/images/mamba/mamba.png",
    description:
      "Mamba, a revolutionary state-space model, is causing a stir in the AI world. Unlike traditional Transformers, which struggle with long sequences and computational limitations, Mamba boasts linear scaling and exceptional efficiency, opening doors for exciting possibilities in various fields.",
    readTime: 3,
    sections: [
      {
        type: "paragraph",
        content:
          "Mamba, a revolutionary state-space model, is causing a stir in the AI world. Unlike traditional Transformers, which struggle with long sequences and computational limitations, Mamba boasts linear scaling and exceptional efficiency, opening doors for exciting possibilities in various fields.",
      },
      {
        type: "paragraph",
        content:
          "This innovative model shines with its ability to process massive datasets seamlessly. Gone are the days of quadratic bottlenecks; Mamba tackles sequences up to a million elements with ease. Mamba's secret weapon lies in its selective reasoning mechanism. It intelligently prioritizes relevant information, focusing on the crucial parts of a sequence, resulting in faster and smarter outcomes. Additionally, Mamba is designed to leverage the power of modern GPUs, achieving remarkable performance with lower computational costs.",
      },
      {
        type: "paragraph",
        content:
          "Mamba's impact extends far beyond technical prowess. It outperforms comparable Transformers of the same size, and even matches those twice its size. This capability opens doors for fields like genomics, audio, and video processing, where analyzing long sequences is crucial. Moreover, Mamba's architecture has the potential to revolutionize AI, serving as the foundation for cutting-edge models and applications across various sectors. Imagine personalized medicine enabled by Mamba's rapid analysis of genetic data, or precise stock market predictions based on its intelligent evaluation of long-term trends.",
      },
      {
        type: "paragraph",
        content:
          "Mamba's arrival sparks exciting questions. While initial tests focused on specific model sizes, its performance in larger models and the potential shift towards smaller LLMs remain intriguing. Furthermore, Mamba's impact on the development of Artificial General Intelligence (AGI) is a fascinating topic to explore. One thing is certain: Mamba represents a significant leap forward in sequence processing. Its unique features and exceptional performance set the stage for a new era of efficient and powerful AI models, with the potential to revolutionize various sectors and pave the way for advancements in AGI. The future of AI looks brighter with Mamba in the picture.",
      },
    ],
  },
  {
    id: "gpt-4-skynet",
    slug: "gpt-4-skynet",
    title: "GPT-4: Skynet Judgment Day approaches",
    date: "April 12, 2023",
    author: "Dali Selmi",
    category: "genai",
    image: "/blogs/images/gpt4/gpt4.png",
    description:
      "A month ago, OpenAI released GPT-4. This launch marks a significant milestone for the company’s deep learning efforts. a powerful new AI model capable of understanding and interpreting both text and images.",
    readTime: 4,
    sections: [
      {
        type: "paragraph",
        content:
          "A month ago, OpenAI released GPT-4. This launch marks a significant milestone for the company’s deep learning efforts. a powerful new AI model capable of understanding and interpreting both text and images. GPT-4 is a multimodal AI that can perform a wide range of tasks across different modes, including audio, text, and images.",
      },
      {
        type: "heading",
        title: "What is GPT4?",
      },
      {
        type: "paragraph",
        content:
          "GPT-4 (Generative Pre-trained Transformer 4) is the latest addition to their GPT series, developed by OpenAI, a research organization committed to advancing artificial intelligence for the betterment of humanity. This ground-breaking AI model is capable of performing multimodal tasks that extend beyond just generating natural language text. GPT-4 is trained on a vast amount of data, which helps it generate meaningful and coherent text using the transformer architecture, a standard approach in natural language processing. However, what sets GPT-4 apart is its ability to analyse and generate images and audio, making it a versatile model that can perform tasks across multiple modalities.",
      },
      {
        type: "heading",
        title: "What can GPT-4 do?",
      },
      {
        type: "paragraph",
        content:
          'One of GPT-4’s biggest new features is its ability to understand more complex and nuanced prompts. According to OpenAI, GPT-4 "exhibits human-level performance on various professional and academic benchmarks". It is also multilingual and can answer multiple- choice questions with high accuracy across 26 languages, from Italian to Korean. According to OpenAI3, GPT-4 is safer and more aligned. GPT-4 has broader general knowledge and a deeper understanding of various domains than ChatGPT3. The model is also capable of processing images and videos to find relevant and accurate information.',
      },
      {
        type: "heading",
        title: "How does it work?",
      },
      {
        type: "paragraph",
        content:
          "ChatGPT is an expansion of the Large Language Model class of machine learning Natural Language Processing models. (LLMs). LLMs consume massive amounts of text data and infer associations between words within the text. These models have evolved in recent years as computer capacity has increased. LLMs get more capable as the amount of their input datasets and parameter space grows.",
      },
      {
        type: "paragraph",
        content:
          "Predicting a word in a series of words is the most fundamental training of language models. This is most typically detected as either next-token prediction or masked-language modeling.",
      },
      {
        type: "paragraph",
        content:
          "In this fundamental sequencing strategy, which is frequently used in conjunction with a Long- Short-Term Memory (LSTM) model, the model fills in the blank with the most statistically likely word given the surrounding context.",
      },
      {
        type: "heading",
        title: "Conclusion",
      },
      {
        type: "paragraph",
        content:
          "In conclusion, GPT-4 is a powerful and versatile AI model developed by OpenAI that can perform tasks across different modes, including text, images, and audio. Its ability to understand complex and nuanced prompts, process multiple languages, and analyze images and videos makes it a significant milestone in the field of deep learning. With its advanced features and capabilities, GPT-4 has the potential to revolutionize various industries, from chatbots to content creation.",
      },
    ],
  },
  {
    id: "gemini-smart-new-brain",
    slug: "gemini-smart-new-brain",
    title: "Gemini: Google's Smart New Brain",
    date: "January 26, 2024",
    author: "Mahdi Jouadi",
    category: "genai",
    image: "/blogs/images/gemini/gemini.jpg",
    description:
      "Imagine a smart computer that can understand not just words, but also pictures, sounds and videos. That's Gemini the new invention from Google DeepMind. On December 6 2023, Google DeepMind announced Gemini, a family of multimodal large language models (LLMs) made to revolutionize artificial intelligence (AI) capabilities.",
    readTime: 3,
    sections: [
      {
        type: "paragraph",
        content:
          "Imagine a smart computer that can understand not just words, but also pictures, sounds and videos. That's Gemini the new invention from Google DeepMind. On December 6 2023, Google DeepMind announced Gemini, a family of multimodal large language models (LLMs) made to revolutionize artificial intelligence (AI) capabilities.",
      },
      {
        type: "paragraph",
        content:
          "Before Gemini could come out, there were some problems to solve. Google had to make sure Gemini could understand things without breaking any rules, like using copyrighted stuff. Despite setbacks,  Google figured it out and made it even better than before.",
      },
      {
        type: "paragraph",
        content:
          "Gemini's impact extends beyond traditional language processing, as DeepMind explores its integration with robotics for physical interaction with the world. Additionally, Gemini's multimodal dataset, encompassing web documents, books, code, and diverse media formats to improve its potential for diverse applications across industries.",
      },
      {
        type: "paragraph",
        content:
          "It is still learning and getting better every day. Google is making sure it's safe and follows all the rules. Gemini is like having a really smart friend who can understand everything you say and do. It shapes the future of AI-driven technologies in profound ways.",
      },
    ],
  },
];

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  console.log("looking for article");

  return ALL_BLOG_ARTICLES.find((article) => article.slug === slug);
}

export function getRelatedArticles(
  currentSlug: string,
  limit: number = 3,
): BlogArticle[] {
  const current = getBlogArticleBySlug(currentSlug);
  if (!current) return [];

  return ALL_BLOG_ARTICLES.filter(
    (article) =>
      article.slug !== currentSlug && article.category === current.category,
  ).slice(0, limit);
}

export function getBlogArticlesByCategory(category: string): BlogArticle[] {
  return ALL_BLOG_ARTICLES.filter((article) => article.category === category);
}

export function getFeaturedArticles(): BlogArticle[] {
  return ALL_BLOG_ARTICLES.filter((article) => article.featured);
}

export function getAllBlogArticles(): BlogArticle[] {
  return ALL_BLOG_ARTICLES;
}
