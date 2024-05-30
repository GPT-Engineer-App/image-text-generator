import { useState } from "react";
import { Container, VStack, Input, Button, Image, Text, Spinner } from "@chakra-ui/react";
import { FaImage } from "react-icons/fa";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateImage = () => {
    if (inputText.trim() === "") return;
    setLoading(true);
    // Simulate an API call to generate image
    setTimeout(() => {
      setImageUrl(`https://placehold.co/600x400`);
      setLoading(false);
    }, 2000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Text to Image Generator</Text>
        <Input placeholder="Enter text to generate image" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <Button leftIcon={<FaImage />} colorScheme="teal" onClick={handleGenerateImage} isLoading={loading}>
          Generate Image
        </Button>
        {loading && <Spinner size="xl" />}
        {imageUrl && !loading && <Image src={imageUrl} alt="Generated" boxSize="300px" objectFit="cover" />}
      </VStack>
    </Container>
  );
};

export default Index;
