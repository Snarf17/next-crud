import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
  } from "@chakra-ui/react";
  import { useMutation } from "react-query";
  import { API } from "../api/api";
  import { useState } from "react";
  import Swal from "sweetalert2";
  
  function ModalCreate({ isOpen, onClose }) {
  const [form, setForm] = useState({
      id: "",
      name: "",
      email: "",
      address: "",
      desc: ""
  })
  
  const handleChange = (e) => {
      setForm({
          ...form,
          [e.target.name]:e.target.value
      })
  }
  
  const handleSubmit = useMutation( async(e) => {
      try {
          e.preventDefault()
          const response = await API.post('/users', form)
          if (response.status === 201) {
            onClose()
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
      } catch (error) {
          console.log(error);
      }
  } )
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Posts User</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} >
              <form onSubmit={(e) => handleSubmit.mutate(e)}>
                  <FormControl mt={4} >
                  <FormLabel>Fullname</FormLabel>
                  <Input type="text" onChange={handleChange} name="name" placeholder="Fullname" required/>
                  </FormControl>
  
                  <FormControl mt={4}>
                  <FormLabel>Email</FormLabel>
                  <Input  type="email" onChange={handleChange} name="email" value={form.email} placeholder="example@mail.co" required/>
                  </FormControl>
  
                  <FormControl mt={4}>
                  <FormLabel>Address</FormLabel>
                  <Input onChange={handleChange} name="address" value={form.address} placeholder="jl.mars" required/>
                  </FormControl>
  
                  <FormControl mt={4}>
                  <FormLabel>Description</FormLabel>
                  <Textarea type="textarea" onChange={handleChange} name="desc" value={form.desc} placeholder="Desc" required/>
                  </FormControl>
                  <ModalFooter>
                      <Button type="submit" colorScheme="blue" mr={3}>
                          Save
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
              </form>
              </ModalBody>
  
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default ModalCreate;
  