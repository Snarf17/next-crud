const { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Button } = require("@chakra-ui/react");

function ModalDetails({isOpen, onClose, data}) {
    return (
      <>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text mb='1rem'>
                 Name = {data.name}<br/>
                 Email = {data.email}<br/>
                 Address = {data.address}<br/>
                 Description = {data.desc}
              </Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalDetails