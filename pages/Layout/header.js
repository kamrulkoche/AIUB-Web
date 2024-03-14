import Image from 'next/image'
export default function Header() {
    return (
        <>
            {/* responsive for small large */}
            <div className='d-lg-flex d-none d-lg-block align-items-center justify-content-between me-4 '>
                <div className=''>
                    <Image
                        src="/image/BANNER-HEADING.png"
                        width={470}
                        height={30}
                        alt="Picture of the author"
                        className='ms-1 '
                    />
                </div>
                <div className='my-1 d-flex gap-1'>
                    <div>
                        <Image
                            src="/svg/search.svg"
                            width={32}
                            height={32}
                            alt="Picture of the author"
                            className='p-2 border border-primary rounded-1'
                        />
                    </div>
                    <div className='d-flex align-items-center'>
                        <Image
                            src="/svg/user-solid.svg"
                            width={32}
                            height={32}
                            alt="Picture of the author"
                            className='p-2 '
                        />
                        <span className='text-primary'>Login</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Image
                            src="/svg/envelope-solid.svg"
                            width={32}
                            height={32}
                            alt="Picture of the author"
                            className='p-2 '
                        />
                        <span className='text-primary'>Web Mail</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Image
                            src="/svg/address-book-solid.svg"
                            width={32}
                            height={32}
                            alt="Picture of the author"
                            className='p-2 '
                        />
                        <span className='text-primary'>Contact Us</span>
                    </div>
                </div>
            </div >

            {/* responsive for small device */}
            <div className='d-flex gap-3 align-items-center justify-content-between m-2 me-4 d-block d-lg-none'>
                <div className='d-flex gap-3 align-items-center'>
                    <Image
                        src="/image/American_International_University-Bangladesh_Monogram.svg.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                        className='ms-1 '
                    />
                    <h6 className='text-uppercase fw-bolder text-primary mt-2'>
                        American <br /> International <br /> University- <br /> Bangladesh
                        <p className='fw-semibold text-dark fs-6 text-capitalize'>Where leaders are created</p>
                    </h6>
                </div>

                <div>
                    <button className='px-2 py-2 border border-secondary rounded-1 '> <Image
                        src="/svg/bars-solid.svg"
                        width={40}
                        height={40}
                        alt="Picture of the author"
                    /></button>
                </div>
            </div>
        </>
    );
}