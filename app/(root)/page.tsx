import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn = {firstName: 'Adrian'};
 
    return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
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
