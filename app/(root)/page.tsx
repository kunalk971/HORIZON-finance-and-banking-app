import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn = {firstName: 'Adrian'};
 
    return (
    <section className="no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll">
        <div className="font-sans no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll">
            <header className=" flex flex-col justify-between gap-8">
                <HeaderBox
                type="greeting"
                title="welcome"
       user={loggedIn?.firstName || 'Guest'}
                subtext="Access and manage your account here."
                />
 
                <TotalBalanceBox
                  accounts={[1,2,3,4,5]}
                  totalBanks={0}
                  totalCurrentBalance={1250.00}
                />
            </header>
        </div>
    </section>
  )
}

export default Home
