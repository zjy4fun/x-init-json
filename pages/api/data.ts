import { NextApiRequest, NextApiResponse } from 'next';

const messageApi = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ 
      "React Simple": "direct:https://github.com/zjy4fun/react-simple-template.git#main",
      "Vue3 Simple": "direct:https://github.com/zjy4fun/vue3-vite-ts-simple-template.git#main",
      "Vue3 + Vite + Arco Design": "direct:https://github.com/zjy4fun/arco-vue3-template.git#main",
      "Vue3 + Vite + Tailwind CSS": "direct:https://github.com/zjy4fun/tailwindcss-vue3-vite-template.git#main",
  });
};

export default messageApi;