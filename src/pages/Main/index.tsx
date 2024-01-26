import {
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import {
  caretForwardCircleOutline,
  home,
  menuOutline,
  videocam,
} from 'ionicons/icons'
import React from 'react'
import { Route } from 'react-router'
import Home from './Home'
import Movies from './Movies'
import TVSeries from './TVSeries'
import More from '../More'
import Header from '../../components/Header'

interface TabsCustomEvent extends CustomEvent {
  detail: { tab: string }
  target: HTMLIonTabsElement
}

type Props = {}

const Main: React.FC = (props: Props) => {
  const [isMoreSelected, setIsMoreSelected] = React.useState<boolean>(false)

  const handleOnTabChange = ({ detail }: TabsCustomEvent) => {
    setIsMoreSelected(detail.tab === 'more')
  }

  return (
    <IonReactRouter>
      <IonTabs onIonTabsDidChange={handleOnTabChange}>
        <IonRouterOutlet>
          <IonPage>
            {!isMoreSelected && <Header />}
            <Route path='/home' render={() => <Home />} exact />
            <Route path='/movies' render={() => <Movies />} exact />
            <Route path='/tvseries' render={() => <TVSeries />} exact />
            <Route path='/more' render={() => <More />} exact />
          </IonPage>
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab='home' href='/home'>
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab='movies' href='/movies'>
            <IonIcon icon={videocam} />
            <IonLabel>Movies</IonLabel>
          </IonTabButton>
          <IonTabButton tab='tvseries' href='/tvseries'>
            <IonIcon icon={caretForwardCircleOutline} />
            <IonLabel>TVSeries</IonLabel>
          </IonTabButton>
          <IonTabButton tab='more' href='/more'>
            <IonIcon icon={menuOutline} />
            <IonLabel>More</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  )
}

export default Main
