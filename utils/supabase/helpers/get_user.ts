'use server'
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function getUser() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { id } = Object(user)
  console.log(id)

  return id
}