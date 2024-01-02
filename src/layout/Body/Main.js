import { useEffect, useState } from 'react'
import { useTab } from '../../app/data/context/TabContext'
import { InputField } from '../../components'
import { Textarea } from '../../components/Textarea/Main'
import { MainContainer } from './styles/Main'

export const Body = props => {
  const [tabState] = useTab()

  return (
    <MainContainer className='Body'>
      <h1>{tabState?.currentTab?.label}</h1>
      {/* <div
        style={
          {
            // border: '1px solid red',
            // width: '100%',
            // height: 'fit-content'
          }
        }
      >
        {tabState?.currentTab?.content}
      </div> */}
      {/* <InputField /> */}
      {tabState?.currentTab?.sections?.map(
        (section, sectionIndex) =>
          section && (
            <div key={`section_${sectionIndex}`}>
              {Object.entries(section).map(([key, value], index) => (
                <div
                  key={`section_${sectionIndex}_item_${index}`}
                  style={{
                    // border: '1px solid red',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div>{key}</div>
                  <Textarea text={value} />
                </div>
              ))}
            </div>
          )
      )}
    </MainContainer>
  )
}
