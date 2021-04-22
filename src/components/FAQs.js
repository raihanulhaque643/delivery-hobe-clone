import React from 'react'

const FAQs = () => {

    const questionList = [
        {description: 'Delivery Fee = FREE', key: 0},
        {description: 'Delivery Time = 1 - 3 Hrs', key: 1},
        {description: 'Working Hours = 10 a.m - 10 p.m', key: 2},
        {description: 'If a product is out of stock we will confirm it with you over a phone call.', key: 3},
        {description: 'For support and issues message us on Facebook', semibold: true, key: 4}
      ];

    return (
        <div className="bg-white text-gray-600 rounded-md p-4 mx-8">
            <span className="font-semibold text-black">FAQs</span>
            <ol className="list-decimal px-4">
                {
                    questionList.map(question => {
                        return (
                          <li 
                          className={`
                          text-sm my-1 
                          ${question.semibold ? 
                          "font-semibold" : ""}
                          `} key={question.key}>
                              {question.description}
                            </li>
                        );
                      })
                }
            </ol>
        </div>
    )
}

export default FAQs;
