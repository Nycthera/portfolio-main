import React from 'react'

function CustomAboutMe() {
  return (
    <div className="p-6 max-w-xl mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">About Me</h1>

      <p className="text-xl text-gray-700 mb-4">
        Hi, I'm Chris, a passionate student and aspiring web developer based in Singapore. I love learning new programming languages and challenging myself with exciting projects.
      </p>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-indigo-500">Interesting Facts</h2>

        <ul className="list-disc pl-5 space-y-2 text-lg text-gray-600">
          <li>I can solve a Rubik's Cube in under 2 minutes!</li>
          <li>I'm fluent in coding languages like JavaScript and Python.</li>
          <li>I've built several projects using React, Vite, and Tailwind, including websites, apps, and games.</li>
          <li>I love experimenting with new recipes and trying out different cuisines in my free time.</li>
          <li>I aspire to one day work on space exploration technologies or AI development.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-indigo-500">Fun Fact</h3>
        <p className="text-lg text-gray-700">
          I can name all the planets in our solar system in under 30 seconds!

        </p>
        <div className="mt-4">
        <p className=" text-indigo-500 text-left font-bold text-xl">
            An animal that describes me
        </p>
        <p className="text-lg text-gray-700">
          I would say I'm most like a fox - adaptable, clever, and always ready to learn new things! 🦊
        </p>
        </div>
      </div>
    </div>
  )
}

export default CustomAboutMe
