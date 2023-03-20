import React from 'react'
import DevAni from './DevAni'

const Hero = () => {
  return (
    <>

    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">프론트엔드 
            <br className="hidden lg:inline-block" />개발자 홍길동입니다.
        </h1>
        <p className="mb-8 leading-relaxed">있을 그들을 황금시대를 아니다. 피가 가지에 천고에 우는 원대하고, 보라. 이상 풀밭에 하는 위하여서 그것을 없는 인간은 든 쓸쓸하랴? 뛰노는 그들은 너의 구하기 없으면, 아름답고 우리 있는가? 어디 주며, 굳세게 따뜻한 실현에 사막이다. 심장의 할지니, 힘차게 뜨고, 같은 못할 되는 것이다. 거친 봄바람을 별과 청춘의 때에, 청춘 이것이야말로 피에 것이다. 찾아 간에 그들은 튼튼하며, 이것은 그들의 심장의 위하여, 있으랴? 커다란 기관과 인간의 피고 풍부하게 영원히 낙원을 용기가 열락의 것이다. 이성은 곧 원대하고, 시들어 아니더면, 피가 이것이다.</p>
        <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">포트폴리오 보러가기</button>              
        </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <DevAni/>
    </div>
    </>
  )
}

export default Hero