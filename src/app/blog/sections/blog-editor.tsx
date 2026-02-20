"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import Code from "@tiptap/extension-code";
import Link from "@tiptap/extension-link";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableCell } from "@tiptap/extension-table-cell";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Code as CodeIcon,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  List,
  ListOrdered,
  CheckSquare,
  Quote,
  Minus,
  Link as LinkIcon,
  Image,
  Table as TableIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Undo,
  Redo,
  MoreHorizontal,
} from "lucide-react";
import { forwardRef, useImperativeHandle, useState, useCallback } from "react";

// Lowlight instance for syntax highlighting
const lowlight = createLowlight(common);

// Mock image uploader
const uploadImage = async (file: File): Promise<string> => {
  // Simulate upload delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Return a mock URL
  return `https://via.placeholder.com/300x200?text=${file.name}`;
};

export interface BlogEditorRef {
  getHTML: () => string;
  getJSON: () => any;
  setContent: (content: string | object) => void;
  getCharacterCount: () => number;
}

interface BlogEditorProps {
  initialContent?: string;
  placeholder?: string;
  onChange?: (content: string) => void;
}

const BlogEditor = forwardRef<BlogEditorRef, BlogEditorProps>(
  ({ initialContent = "", placeholder = "Start writing...", onChange }, ref) => {
    const [characterCount, setCharacterCount] = useState(0);

    const editor = useEditor({
      extensions: [
        StarterKit.configure({
          heading: { levels: [1, 2, 3, 4] },
          codeBlock: false, // Disable default code block
        }),
        Underline,
        Strike,
        Code,
        Link.configure({
          openOnClick: false,
          HTMLAttributes: {
            class: "text-blue-600 underline cursor-pointer",
          },
        }),
        TaskList,
        TaskItem.configure({
          nested: true,
        }),
        CodeBlockLowlight.configure({
          lowlight,
        }),
        Table.configure({
          resizable: true,
        }),
        TableRow,
        TableHeader,
        TableCell,
        TextAlign.configure({
          types: ["heading", "paragraph"],
        }),
        Placeholder.configure({
          placeholder,
        }),
        CharacterCount,
        // SlashCommand.configure({
        //   suggestion: {
        //     items: getSuggestionItems,
        //     render: () => {
        //       let component: any;
        //       let popup: any;

        //       return {
        //         onStart: (props: any) => {
        //           component = new SlashMenuComponent(props);
        //           popup = component.render();
        //         },
        //         onUpdate: (props: any) => {
        //           component.update(props);
        //         },
        //         onKeyDown: (props: any) => {
        //           return component.onKeyDown(props);
        //         },
        //         onExit: () => {
        //           popup?.destroy();
        //         },
        //       };
        //     },
        //   },
        // }),
      ],
      content: initialContent,
      onUpdate: ({ editor }) => {
        const html = editor.getHTML();
        setCharacterCount(editor.storage.characterCount?.characters() || 0);
        onChange?.(html);
      },
      immediatelyRender: false,
    });

    useImperativeHandle(ref, () => ({
      getHTML: () => editor?.getHTML() || "",
      getJSON: () => editor?.getJSON(),
      setContent: (content: string | object) => {
        editor?.commands.setContent(content);
      },
      getCharacterCount: () => characterCount,
    }));

    const handleImageUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file && editor) {
        try {
          const url = await uploadImage(file);
          editor.chain().focus().insertContent(`<img src="${url}" alt="Uploaded image" />`).run();
        } catch (error) {
          console.error("Image upload failed:", error);
        }
      }
    }, [editor]);

    if (!editor) return null;

    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
          {/* Toolbar */}
          <Toolbar editor={editor} onImageUpload={handleImageUpload} />

          {/* Editor */}
          <div className="min-h-[400px] max-h-[600px] overflow-y-auto p-4">
            <EditorContent
              editor={editor}
              className="tiptap prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none focus:outline-none"
            />
          </div>

          {/* Character Counter */}
          <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400">
            {characterCount} characters
          </div>
        </div>
      </div>
    );
  }
);

BlogEditor.displayName = "BlogEditor";

export default BlogEditor;

// Toolbar Component
interface ToolbarProps {
  editor: any;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Toolbar({ editor, onImageUpload }: ToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-2">
      {/* Text Formatting */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive("bold")}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive("italic")}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        active={editor.isActive("underline")}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
      >
        <UnderlineIcon className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        active={editor.isActive("strike")}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCode().run()}
        active={editor.isActive("code")}
        disabled={!editor.can().chain().focus().toggleCode().run()}
      >
        <CodeIcon className="h-4 w-4" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />

      {/* Headings */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        active={editor.isActive("heading", { level: 1 })}
      >
        <Heading1 className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        active={editor.isActive("heading", { level: 2 })}
      >
        <Heading2 className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        active={editor.isActive("heading", { level: 3 })}
      >
        <Heading3 className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        active={editor.isActive("heading", { level: 4 })}
      >
        <Heading4 className="h-4 w-4" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />

      {/* Lists */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={editor.isActive("bulletList")}
      >
        <List className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive("orderedList")}
      >
        <ListOrdered className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        active={editor.isActive("taskList")}
      >
        <CheckSquare className="h-4 w-4" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />

      {/* Block Elements */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        active={editor.isActive("blockquote")}
      >
        <Quote className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        active={editor.isActive("codeBlock")}
      >
        <CodeIcon className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <Minus className="h-4 w-4" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />

      {/* Link and Image */}
      <ToolbarButton
        onClick={() => {
          const url = window.prompt("URL:");
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
        active={editor.isActive("link")}
      >
        <LinkIcon className="h-4 w-4" />
      </ToolbarButton>
      <label className="relative">
        <input
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <ToolbarButton as="div">
          <Image className="h-4 w-4" />
        </ToolbarButton>
      </label>

      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />

      {/* Table */}
      <ToolbarButton
        onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
      >
        <TableIcon className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().addColumnBefore().run()}
        disabled={!editor.can().addColumnBefore()}
      >
        <MoreHorizontal className="h-4 w-4" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />

      {/* Text Alignment */}
      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        active={editor.isActive({ textAlign: "left" })}
      >
        <AlignLeft className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        active={editor.isActive({ textAlign: "center" })}
      >
        <AlignCenter className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        active={editor.isActive({ textAlign: "right" })}
      >
        <AlignRight className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        active={editor.isActive({ textAlign: "justify" })}
      >
        <AlignJustify className="h-4 w-4" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />

      {/* Undo/Redo */}
      <ToolbarButton
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <Undo className="h-4 w-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <Redo className="h-4 w-4" />
      </ToolbarButton>
    </div>
  );
}

// Toolbar Button Component
interface ToolbarButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  as?: "button" | "div";
}

function ToolbarButton({ children, onClick, active, disabled, as = "button" }: ToolbarButtonProps) {
  const Component = as;
  return (
    <Component
      onClick={onClick}
      disabled={disabled}
      className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
        ${active
          ? "bg-blue-600 text-white"
          : disabled
          ? "text-gray-400 cursor-not-allowed"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }
      `}
    >
      {children}
    </Component>
  );
}

// Slash Menu Component (simplified)
class SlashMenuComponent {
  constructor(props: any) {
    this.props = props;
  }

  props: any;

  render() {
    // This is a simplified implementation. In a real app, you'd use a proper UI library.
    return {
      destroy: () => {},
    };
  }

  update(props: any) {
    this.props = props;
  }

  onKeyDown(props: any) {
    // Handle keyboard navigation
    return false;
  }
}