import {
  IonIcon,
  IonLabel,
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
import { Redirect, Route } from 'react-router'
import Home from './Home'
import Movies from './Movies'
import TVSeries from './TVSeries'
import More from '../More'

type Props = {}

const Main: React.FC = (props: Props) => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path='/home' render={() => <Home />} exact={true} />
          <Route path='/movies' render={() => <Movies />} exact={true} />
          <Route path='/tvseries' render={() => <TVSeries />} exact={true} />
          <Route path='/more' render={() => <More />} exact={true} />
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
