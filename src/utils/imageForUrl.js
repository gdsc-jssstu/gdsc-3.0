import client from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(client);

const imageUrlFor = source => imageBuilder.image(source);

export default imageUrlFor;