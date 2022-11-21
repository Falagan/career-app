import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

type TabsProps = {
  tabsList: string[];
  tabsPanels: JSX.Element[];
};

export default function TabsContainer(props: TabsProps): JSX.Element {
  return (
    <>
      <Tabs>
        {/* Tabs List */}
        <TabList>
          {props.tabsList.map((tabList: string, index: number) => (
            <Tab key={index}>{tabList}</Tab>
          ))}
        </TabList>
        {/* Tabs Content */}
        <TabPanels>
          {props.tabsPanels.map((tabPanel: JSX.Element, index: number) => (
            <TabPanel key={index}>{tabPanel}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
}
