
import rectangle from '../assets/img/rectangle-5.svg'
import Heartfirst from '../assets/img/Heart-1.png'
import Heartsecond from '../assets/img/Heart-2.png'
import iconcheck from '../assets/img/icon-check.png'
import logo from '../assets/img/group-1.png'
import phone from '../assets/img/vector-1.svg'
import clock from '../assets/img/vector-2.svg'
import puzzle from '../assets/img/vector.svg'
import coverpic from '../assets/img/group-2.png'
import instagram from '../assets/Buttons/Icon-3.png'
import youtube from '../assets/Buttons/Icon-2.png'
import linkedin from '../assets/Buttons/Icon-1.png'
import facebook from '../assets/Buttons/Icon.png'
import ContactUsForm from '../components/Common/ContactUsForm'
import { Link, matchPath } from 'react-router-dom';


const Home = () => {



  return (<>
    <div className="w-full flex flex-col bg-white h-auto overflow-hidden text-left text-5xl text-black font-body-text">
      <div className="flex flex-col items-center justify-start p-2.5 box-border text-center mt-10">
        <div className="flex flex-col items-center justify-start gap-[24px] w-full min-[769px]:w-[857px]">
          <b className="text-3xl min-[769px]:text-45xl tracking-[-0.02em]">
            <span>{`Choose `}</span>
            <span className="text-red">Right</span>
            <span>!</span>
          </b>
          <div className="text-xl min-[769px]:text-5xl leading-[150%] text-gray">
            Find your perfect match here!
          </div>
          <div
            className="shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-khaki-200 flex items-center justify-center py-3.5 px-6 cursor-pointer text-left text-base"
          >
            <div className="leading-[150%] font-medium">
              <Link to='/signup' style={{ color: 'inherit', textDecoration: 'none' }}>Begin</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[60px]">
        {/* <img className="rounded-lg w-[1280px] h-[640px] object-cover" alt="" src={coverpic} /> */}
        <img className="mx-14 rounded-lg w-4/5 h-2/5 object-cover" alt="" src={coverpic} />
      </div>
      <div className="flex flex-col flex-wrap items-center mt-[100px] sm:mx-10 text-center text-5xl min-[769px]:text-21xl">
        <div className="leading-[110%] font-semibold">
          <span>{`Get high level `}</span>
          <span className="text-red">{`Support `}</span>
          <span>and</span>
          <span className="text-red"> Assistance</span>
          <span> on your tips</span>
        </div>
      </div>
      <div className="grid grid-cols-1 min-[769px]:grid-cols-2 gap-[16px] lg:gap-[32px] mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[120px] justify-items-center">
        <div className="flex flex-col items-center shadow-[-4px_8px_20px_rgba(0,_0,_0,_0.1)] rounded-xl bg-white p-4 sm:p-6 md:p-8 border-[1px] border-solid border-whitesmoke w-full max-w-[300px] sm:max-w-[375px] min-[769px]:max-w-[359px] xl:max-w-[409px]">
          <div className="flex items-center gap-[8px] sm:gap-[12px] md:gap-[16px]">
            <img className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[45px] md:h-[45px]" alt="" src={puzzle} />
            <div className="flex flex-col items-start">
              <div className="leading-[150%] font-medium text-sm sm:text-base md:text-lg">
                <span>{`Tailored `}</span>
                <span className="text-red">Matchmaking</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center shadow-[-4px_8px_20px_rgba(0,_0,_0,_0.1)] rounded-xl bg-white p-4 sm:p-6 md:p-8 border-[1px] border-solid border-whitesmoke w-full max-w-[300px] sm:max-w-[375px] min-[769px]:max-w-[359px] xl:max-w-[409px]">
          <div className="flex items-center gap-[8px] sm:gap-[12px] md:gap-[16px]">
            <img className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[45px] md:h-[45px]" alt="" src={iconcheck} />
            <div className="flex flex-col items-start">
              <div className="leading-[150%] font-medium text-sm sm:text-base md:text-lg">
                <span>Verified</span>
                <span className="text-red"> Profiles</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center shadow-[-4px_8px_20px_rgba(0,_0,_0,_0.1)] rounded-xl bg-white p-4 sm:p-6 md:p-8 border-[1px] border-solid border-whitesmoke w-full max-w-[300px] sm:max-w-[375px] min-[769px]:max-w-[359px] mt-[16px] min-[769px]:mt-0 xl:max-w-[409px]">
          <div className="flex items-center gap-[8px] sm:gap-[12px] md:gap-[16px]">
            <img className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[45px] md:h-[45px]" alt="" src={phone} />
            <div className="flex flex-col items-start">
              <div className="leading-[150%] font-medium text-sm sm:text-base md:text-lg">
                <span>Transparent</span>
                <span className="text-red"> Communication</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center shadow-[-4px_8px_20px_rgba(0,_0,_0,_0.1)] rounded-xl bg-white p-4 sm:p-6 md:p-8 border-[1px] border-solid border-whitesmoke w-full max-w-[300px] sm:max-w-[375px] min-[769px]:max-w-[359px] text-black mt-[16px] min-[769px]:mt-0 xl:max-w-[409px]">
          <div className="flex items-center gap-[8px] sm:gap-[12px] md:gap-[16px]">
            <img className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[45px] md:h-[45px]" alt="" src={clock} />
            <div className="flex flex-col items-start">
              <div className="leading-[150%] font-medium text-sm sm:text-base md:text-lg">
                <span>{`Efficient `}</span>
                <span className="text-red">Matchmaking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center px-4 mt-4'>
        <div className="flex flex-col items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 w-full max-w-[1176px] text-red font-norican text-3xl sm:text-4xl md:text-2xl lg:text-6xl">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <img className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover overflow-visible" alt="Logo" src={logo} />
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 ">
              <div className="text-black inline-block text-4xl sm:text-2xl md:text-6xl lg:text-7xl">Parinay</div>
              <div className="mt-2">Setu</div>
            </div>
          </div>
          <div className="text-sm mx-2 md:mx-5 sm:text-base md:text-lg lg:text-xl leading-normal sm:leading-relaxed md:leading-loose text-black text-justify font-body-text">
            <p className="m-0">Lorem ipsum dolor sit amet consectetur. Tellus donec egestas et a mi fringilla lorem pharetra. Ipsum ac a quam ultrices senectus fermentum pulvinar tortor pretium. Tellus pharetra id dui euismod sed in lacinia quis. Morbi consequat nunc suspendisse leo odio nisi morbi tellus enim. Nisi massa ante egestas egestas enim venenatis facilisi nisl purus. Metus ultricies est viverra luctus eget malesuada viverra. Mollis sit nibh hac risus laoreet. Sit nibh quis nibh viverra eu ante at.</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Morbi praesent massa ultrices tristique. Egestas et eu sed sapien quis morbi neque quis imperdiet. Tellus eget blandit arcu feugiat at viverra malesuada lacus amet. Elementum diam pellentesque morbi sem ornare pellentesque eu. Diam arcu eu iaculis risus sodales eget. Dictumst elementum commodo cursus maecenas sed leo elit erat. Purus consequat et leo pharetra dis. Cursus nibh vitae nec porta vitae elementum senectus mattis. Urna egestas quis nisl dignissim mi.</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0"> Non leo posuere a consequat diam sagittis pellentesque lorem in. Faucibus id iaculis vitae blandit vitae placerat. Nec sem nec proin pellentesque cras maecenas placerat. Volutpat pellentesque interdum commodo senectus ipsum nulla pulvinar lacus. Auctor vitae varius nibh ut nisi quis quis. Blandit egestas turpis et adipiscing id id ac adipiscing.</p>
            <p className="m-0">Netus neque vel nisl sodales. Eu et lectus aliquet sed id velit vel.</p>
          </div>
        </div>
      </div>
      <div id='contact-form'>
        <ContactUsForm />
      </div>
      <div className="flex flex-col items-center justify-center mt-20 bg-gradient-to-b from-yellow-200 to-white text-base text-darkslategray px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-52 justify-between w-full max-w-6xl">
          <div className="flex flex-col items-center gap-2 mb-12 lg:mb-0">
            <div className="text-3xl sm:text-4xl md:text-3xl leading-[150%] text-black font-niconne">
              <span>Parinay</span>
              <span className="text-red"> Setu</span>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-10 h-10 object-cover" alt="" src={instagram} />
              <img className="w-10 h-10 object-cover" alt="" src={facebook} />
              <img className="w-10 h-10 object-cover" alt="" src={youtube} />
              <img className="w-10 h-10 object-cover" alt="" src={linkedin} />
            </div>
          </div>
          <div className='hidden md:flex md:gap-8 md:justify-around lg:gap-16 justify-between w-full max-w-6xl lg:px-10'>
            <div className="flex flex-col items-start lg:items-center gap-4">
              <div className="leading-[150%] font-medium text-black">Topic</div>
              <div className="leading-[150%] font-medium">Page</div>
              <div className="leading-[150%] font-medium">Page</div>
              <div className="leading-[150%] font-medium">Page</div>
            </div>
            <div className="flex flex-col items-start lg:items-center gap-4">
              <div className="leading-[150%] font-medium text-black">Topic</div>
              <div className="leading-[150%] font-medium">Page</div>
              <div className="leading-[150%] font-medium">Page</div>
              <div className="leading-[150%] font-medium">Page</div>
            </div>
            <div className="flex flex-col items-start lg:items-center gap-4">
              <div className="leading-[150%] font-medium text-black">Topic</div>
              <div className="leading-[150%] font-medium">Page</div>
              <div className="leading-[150%] font-medium">Page</div>
              <div className="leading-[150%] font-medium">Page</div>
            </div>
          </div>
        </div>
        <div className="w-full border-t-[1px] border-solid border-gainsboro mt-4" />
      </div>



    </div>
    {/* <div className="absolute justify-between items-center mt-[60px]">
      <img className="left-[100px] w-[500px] h-[548px] object-contain" alt="" src={Heartfirst} />
      <img className="w-[555px] h-[565px] object-contain" alt="" src={Heartsecond} />
    </div> */}
  </>);

};

export default Home;
