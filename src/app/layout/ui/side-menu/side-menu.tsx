import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  VStack,
} from '@chakra-ui/react';
import { SideMenuProps } from './models/side-menu-props';

export default function SideMenu({ isOpen, onClose, header, children }: SideMenuProps) {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={() => onClose()}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader mt="5">{header}</DrawerHeader>
        <DrawerBody>
          <VStack spacing={8} wrap="wrap" align={'start'}>
            {children}
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          {/* <Button variant="outline" mr={3} onClick={() => {}}>
            Cancel
          </Button> */}
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
