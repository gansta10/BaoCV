export const Data = {
  profile: {
    name: "Trương Gia Bảo",
    ocupation: "HCMUS intern",
    location: "Ho Chi Minh city",
    email: "realnhao9000@gmail.com",
    telephone: "+0847503068",
    image: "images/SKIN_2_cropped.webp",
  },
  aboutMe: {
    label: "Profile",
    description:
      "A student who is still studying in HCMUS, has foundational knowledge in front-end development, computer networking and security, and machine learning. \n" +
        "\n",
  },
  skills: {
    technicalLabel: "Technology Knowledge",
    softLabel: "Soft Skill",
    technicalSkills: [
      "React-JS",
      "Cisco CCNA",
      "Python Tensorflow",
      "Git",
    ],
    softSkills: [
      "Active listening and feedback",
      "Collaborative problem-solving",
        "Innovative thinking",
        "Self-motivated learner"
    ],
  },
  socialMedia: {
    label: "SOCIAL",
    social: [
      {
        label: "Visit my Linkedin profile",
        name: "linkedin",
        url: "https://www.linkedin.com/in/b%E1%BA%A3o-tr%C6%B0%C6%A1ng-795b56330/",
        className: "bxl-linkedin-square",
      },
      {
        label: "Visit my Github page",
        name: "github",
        url: "https://github.com/gansta10",
        className: "bxl-github",
      },
    ],
  },
  experience: {
    works: [
      {
        title: "Network and Security Intern",
        period: "07/2024 - 12/2024\n",
        company: "CCVI Technology",
        description: [
          "Learn and design security network model based on customer's requirements.",
          "Deploy an switch model and firewall to protect any dangers from outside internet.",
        ],
      },
    ],
    academic: [
      {
        career: "University of Science Ho Chi Minh city",
        date: "2021 - Present",
        institution: "Department of Physics and Computer Science.",
      },
    ],
    proyects: [
      {
        name: "Security Network Model",
        company: "CCVI",
        period: "07/2024 - 12/2024\n",
        description: [
          "Design security network model using Fortinet's Firewalls and Gateways to allow some services from inner 3 layer Switch model and to prevent cyberattacks from the outside Internet.",
        ],
      },
      {
        name: "Hand Written Recognition using Machine Learning ",
        company: "HCMUS",
        period: "01/2023 - 05/2023\n",
        description: [
          "Developed and trained a convolutional neural network (CNN) to classify handwritten digits/characters with high accuracy.\n",
          "Preprocessed input data, including image normalization and augmentation, to enhance model performance and robustness.",
            "Utilized frameworks such as TensorFlow/Keras or PyTorch for model implementation and optimization.",

        ],
      },
      {
        name: "Minecraft Java minigame",
        company: "HCMUS",
        period: "01/2023 - 04/2023\n",
        description: [
          "Create a block game similar to Minecraft using LibGDX game framework.",
        ],
      },
    ],
  },
};
