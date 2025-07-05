from google.cloud import documentai_v1 as documentai

def parse_bill(file_path):
    client = documentai.DocumentProcessorServiceClient()
    
    with open(file_path, "rb") as image:
        content = image.read()

    document = {"content": content, "mime_type": "application/pdf"}
    request = {"name": "projects/my-project/processors/processor-id", "document": document}
    
    result = client.process_document(request=request)
    return extract_line_items(result.document)
